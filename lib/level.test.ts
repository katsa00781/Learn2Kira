import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { levelBar, levelOf } from "./level";

describe("levelOf", () => {
  it("0 XP az 1. szint eleje", () => {
    assert.deepEqual(levelOf(0), { level: 1, into: 0 });
  });
  it("99 XP még az 1. szint", () => {
    assert.deepEqual(levelOf(99), { level: 1, into: 99 });
  });
  it("100 XP a 2. szint eleje", () => {
    assert.deepEqual(levelOf(100), { level: 2, into: 0 });
  });
});

describe("levelBar", () => {
  it("szinten belül a sáv előtte-utána értéke", () => {
    assert.deepEqual(levelBar(20, 65), { start: 0.2, end: 0.65, level: 1, leveledUp: false });
  });
  it("szintlépésnél az új szint elejéről indul", () => {
    assert.deepEqual(levelBar(90, 130), { start: 0, end: 0.3, level: 2, leveledUp: true });
  });
});
