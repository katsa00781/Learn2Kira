import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { currentStreak, nextStreak } from "./streak";

describe("nextStreak", () => {
  it("az első kör után 1", () => {
    assert.equal(nextStreak(0, null, "2026-10-12"), 1);
  });
  it("ugyanaznap második kör nem növeli", () => {
    assert.equal(nextStreak(4, "2026-10-12", "2026-10-12"), 4);
  });
  it("tegnapi gyakorlás után eggyel nő", () => {
    assert.equal(nextStreak(4, "2026-10-11", "2026-10-12"), 5);
  });
  it("hónaphatáron is folytatódik", () => {
    assert.equal(nextStreak(2, "2026-09-30", "2026-10-01"), 3);
  });
  it("kimaradt nap után újraindul", () => {
    assert.equal(nextStreak(9, "2026-10-09", "2026-10-12"), 1);
  });
});

describe("currentStreak", () => {
  it("ma vagy tegnap gyakorolt: a tárolt érték él", () => {
    assert.equal(currentStreak(5, "2026-10-12", "2026-10-12"), 5);
    assert.equal(currentStreak(5, "2026-10-11", "2026-10-12"), 5);
  });
  it("három napja nem gyakorolt: 0", () => {
    assert.equal(currentStreak(5, "2026-10-09", "2026-10-12"), 0);
  });
  it("még sosem gyakorolt: 0", () => {
    assert.equal(currentStreak(0, null, "2026-10-12"), 0);
  });
});

describe("mentőöv", () => {
  it("egy kimaradt napot megment, a sorozat folytatódik", () => {
    assert.equal(nextStreak(5, "2026-10-10", "2026-10-12", []), 6);
    assert.equal(currentStreak(5, "2026-10-10", "2026-10-12", []), 5);
  });
  it("ugyanabban a hónapban másodszor már nem véd", () => {
    assert.equal(nextStreak(5, "2026-10-20", "2026-10-22", ["2026-10-11"]), 1);
    assert.equal(currentStreak(5, "2026-10-20", "2026-10-22", ["2026-10-11"]), 0);
  });
  it("új hónapban újra elérhető", () => {
    assert.equal(nextStreak(5, "2026-11-08", "2026-11-10", ["2026-10-11"]), 6);
  });
  it("két kimaradt napot nem véd", () => {
    assert.equal(nextStreak(5, "2026-10-09", "2026-10-12", []), 1);
    assert.equal(currentStreak(5, "2026-10-09", "2026-10-12", []), 0);
  });
  it("hónaphatáron a kimaradt nap hónapja számít", () => {
    assert.equal(nextStreak(3, "2026-09-29", "2026-10-01", ["2026-09-03"]), 1);
    assert.equal(nextStreak(3, "2026-09-29", "2026-10-01", ["2026-08-03"]), 4);
  });
});
