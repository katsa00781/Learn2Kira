import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { newBadges } from "./badges";

const base = { streak: 1, correct: 7, total: 10, topicSubject: null } as const;

describe("newBadges", () => {
  it("az első kör mindig jár, ha még nincs meg", () => {
    assert.deepEqual(newBadges([], base), ["first-lesson"]);
  });
  it("a már feloldott jelvény nem jön újra", () => {
    assert.deepEqual(newBadges(["first-lesson"], base), []);
  });
  it("a sorozat küszöbei: 3, 7, 14, 30", () => {
    assert.deepEqual(newBadges(["first-lesson"], { ...base, streak: 3 }), ["streak-3"]);
    assert.deepEqual(newBadges(["first-lesson"], { ...base, streak: 7 }), ["streak-3", "streak-7"]);
    assert.deepEqual(newBadges(["first-lesson", "streak-3", "streak-7"], { ...base, streak: 13 }), []);
    assert.deepEqual(newBadges(["first-lesson", "streak-3", "streak-7"], { ...base, streak: 14 }), ["streak-14"]);
    assert.deepEqual(newBadges(["first-lesson", "streak-3", "streak-7", "streak-14"], { ...base, streak: 30 }), ["streak-30"]);
  });
  it("aki egy régi mentéssel már 20 napnál tart, megkapja a 14 napost is", () => {
    assert.deepEqual(newBadges(["first-lesson", "streak-3", "streak-7"], { ...base, streak: 20 }), ["streak-14"]);
  });
  it("hibátlan kör: minden válasz jó", () => {
    assert.deepEqual(newBadges(["first-lesson"], { ...base, correct: 10 }), ["perfect-round"]);
    assert.deepEqual(newBadges(["first-lesson"], { ...base, correct: 9 }), []);
  });
  it("üres kör nem hibátlan", () => {
    assert.deepEqual(newBadges(["first-lesson"], { ...base, correct: 0, total: 0 }), []);
  });
  it("hibátlan kör csak legalább 8 feladatnál jár", () => {
    assert.deepEqual(newBadges(["first-lesson"], { ...base, correct: 7, total: 7 }), []);
    assert.deepEqual(newBadges(["first-lesson"], { ...base, correct: 8, total: 8 }), ["perfect-round"]);
  });
  it("kész témakör a tantárgy jelvényét adja", () => {
    assert.deepEqual(newBadges(["first-lesson"], { ...base, topicSubject: "matek" }), ["topic-matek"]);
  });
  it("egy körben több jelvény is jöhet", () => {
    assert.deepEqual(newBadges([], { streak: 3, correct: 10, total: 10, topicSubject: "nyelvtan" }), [
      "first-lesson",
      "streak-3",
      "perfect-round",
      "topic-nyelvtan",
    ]);
  });
});
