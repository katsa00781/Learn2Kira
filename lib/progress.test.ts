import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Card } from "./leitner";
import { dueCount, reviewOutlook, seenRatio } from "./progress";

const card: Card = { box: 1, dueAt: "2026-10-12" };

describe("seenRatio", () => {
  it("üres lista 0", () => {
    assert.equal(seenRatio([], {}), 0);
  });
  it("kártya nélkül 0", () => {
    assert.equal(seenRatio([{ id: "a" }, { id: "b" }], {}), 0);
  });
  it("a kártyával rendelkezők aránya", () => {
    assert.equal(seenRatio([{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }], { a: card, c: card }), 0.5);
  });
  it("idegen kártya nem számít", () => {
    assert.equal(seenRatio([{ id: "a" }], { x: card }), 0);
  });
  it("mind kipróbálva 1", () => {
    assert.equal(seenRatio([{ id: "a" }], { a: card }), 1);
  });
});

describe("dueCount", () => {
  const today = "2026-10-12";
  it("csak az esedékes vagy lejárt kártyákat számolja", () => {
    const cards: Record<string, Card> = {
      a: { box: 1, dueAt: "2026-10-12" },
      b: { box: 2, dueAt: "2026-10-10" },
      c: { box: 3, dueAt: "2026-10-15" },
    };
    assert.equal(dueCount([{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }], cards, today), 2);
  });
  it("kártya nélkül 0", () => {
    assert.equal(dueCount([{ id: "a" }], {}, today), 0);
  });
});

describe("reviewOutlook", () => {
  const today = "2026-10-12";
  it("az aznapra esedékes kártyákat számolja", () => {
    const cards = { a: { box: 1, dueAt: today } as Card, b: { box: 2, dueAt: "2026-10-13" } as Card };
    assert.deepEqual(reviewOutlook(["a", "b"], cards, today), { dueToday: 1, nextInDays: 1 });
  });
  it("a legközelebbi jövőbeli ismétlés napjait adja", () => {
    const cards = { a: { box: 3, dueAt: "2026-10-15" } as Card, b: { box: 4, dueAt: "2026-10-19" } as Card };
    assert.deepEqual(reviewOutlook(["a", "b"], cards, today), { dueToday: 0, nextInDays: 3 });
  });
  it("hónaphatáron is jól számol", () => {
    const cards = { a: { box: 3, dueAt: "2026-11-02" } as Card };
    assert.deepEqual(reviewOutlook(["a"], cards, "2026-10-30"), { dueToday: 0, nextInDays: 3 });
  });
  it("kártya nélküli azonosító kimarad", () => {
    assert.deepEqual(reviewOutlook(["x"], {}, today), { dueToday: 0, nextInDays: null });
  });
});
