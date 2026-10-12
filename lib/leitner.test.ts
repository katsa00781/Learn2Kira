import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Exercise } from "@/types/exercise";
import { answerCard, dueDate, nextBox, selectSessionExercises, toDay, type Card } from "./leitner";

const ex = (id: string): Exercise => ({
  id,
  topicId: "t",
  type: "punctuation",
  sentence: "Szia",
  options: [".", "!"],
  answer: "!",
});

const noShuffle = () => 0.999; // a keverés így nem mozdít semmit

describe("nextBox", () => {
  it("helyes válasz eggyel feljebb viszi", () => {
    assert.equal(nextBox(1, true), 2);
    assert.equal(nextBox(4, true), 5);
  });
  it("az 5. doboznál megáll", () => {
    assert.equal(nextBox(5, true), 5);
  });
  it("hibás válasz bárhonnan az 1. dobozba teszi", () => {
    assert.equal(nextBox(1, false), 1);
    assert.equal(nextBox(3, false), 1);
    assert.equal(nextBox(5, false), 1);
  });
});

describe("dueDate", () => {
  it("dobozonként az 0-1-3-7-14 napos intervallumot adja", () => {
    assert.equal(dueDate(1, "2026-10-12"), "2026-10-12");
    assert.equal(dueDate(2, "2026-10-12"), "2026-10-13");
    assert.equal(dueDate(3, "2026-10-12"), "2026-10-15");
    assert.equal(dueDate(4, "2026-10-12"), "2026-10-19");
    assert.equal(dueDate(5, "2026-10-12"), "2026-10-26");
  });
  it("átlép hónap- és évhatáron", () => {
    assert.equal(dueDate(5, "2026-12-25"), "2027-01-08");
    assert.equal(dueDate(2, "2026-02-28"), "2026-03-01");
  });
  it("nyári időszámításváltáson sem csúszik el", () => {
    assert.equal(dueDate(5, "2026-03-22"), "2026-04-05");
  });
});

describe("toDay", () => {
  it("helyi napot formáz, nullával kitöltve", () => {
    assert.equal(toDay(new Date(2026, 0, 5, 23, 59)), "2026-01-05");
  });
});

describe("answerCard", () => {
  it("új feladat helyes válasza a 2. dobozba kerül, holnapra", () => {
    assert.deepEqual(answerCard(undefined, true, "2026-10-12"), { box: 2, dueAt: "2026-10-13" });
  });
  it("új feladat hibás válasza az 1. dobozban marad, aznapra", () => {
    assert.deepEqual(answerCard(undefined, false, "2026-10-12"), { box: 1, dueAt: "2026-10-12" });
  });
  it("rontás visszaviszi az 1. dobozba", () => {
    assert.deepEqual(answerCard({ box: 4, dueAt: "2026-10-12" }, false, "2026-10-12"), {
      box: 1,
      dueAt: "2026-10-12",
    });
  });
});

describe("selectSessionExercises", () => {
  const today = "2026-10-12";

  it("az esedékes ismétlések előznek meg az újakat", () => {
    const cards: Record<string, Card> = { b: { box: 2, dueAt: "2026-10-12" } };
    const result = selectSessionExercises({
      exercises: [ex("a"), ex("b"), ex("c")],
      cards,
      today,
      random: noShuffle,
    });
    assert.deepEqual(result.map((e) => e.id), ["b", "a", "c"]);
  });

  it("a nem esedékes kártyák kimaradnak, és nem számítanak újnak", () => {
    const cards: Record<string, Card> = { a: { box: 3, dueAt: "2026-10-15" } };
    const result = selectSessionExercises({
      exercises: [ex("a"), ex("b")],
      cards,
      today,
      random: noShuffle,
    });
    assert.deepEqual(result.map((e) => e.id), ["b"]);
  });

  it("a legrégebben esedékes van elöl, azonos napon az alacsonyabb doboz", () => {
    const cards: Record<string, Card> = {
      a: { box: 3, dueAt: "2026-10-11" },
      b: { box: 2, dueAt: "2026-10-10" },
      c: { box: 1, dueAt: "2026-10-11" },
    };
    const result = selectSessionExercises({
      exercises: [ex("a"), ex("b"), ex("c")],
      cards,
      today,
    });
    assert.deepEqual(result.map((e) => e.id), ["b", "c", "a"]);
  });

  it("legfeljebb `size` feladatot ad, az ismétlések is beleszámítanak", () => {
    const exercises = Array.from({ length: 20 }, (_, i) => ex(`e${i}`));
    const cards: Record<string, Card> = {};
    for (const e of exercises.slice(0, 12)) cards[e.id] = { box: 1, dueAt: today };
    const result = selectSessionExercises({ exercises, cards, today, size: 10 });
    assert.equal(result.length, 10);
    assert.ok(result.every((e) => cards[e.id]));
  });

  it("alapból 10 feladatos kört állít össze", () => {
    const exercises = Array.from({ length: 30 }, (_, i) => ex(`e${i}`));
    assert.equal(selectSessionExercises({ exercises, cards: {}, today }).length, 10);
  });

  it("kevesebbet ad, ha nincs elég feladat (minden kész)", () => {
    const cards: Record<string, Card> = { a: { box: 5, dueAt: "2026-10-26" } };
    assert.deepEqual(selectSessionExercises({ exercises: [ex("a")], cards, today }), []);
  });

  it("nem módosítja a bemenetet", () => {
    const exercises = [ex("a"), ex("b"), ex("c")];
    selectSessionExercises({ exercises, cards: {}, today });
    assert.deepEqual(exercises.map((e) => e.id), ["a", "b", "c"]);
  });
});
