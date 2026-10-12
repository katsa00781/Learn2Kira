import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { monthGrid } from "./calendar";

describe("monthGrid", () => {
  const today = "2026-10-12";

  it("hétfővel kezdődő hetek, a hónap első napja a jó oszlopban (2026. október 1. csütörtök)", () => {
    const grid = monthGrid(today, []);
    assert.equal(grid.length, 5);
    assert.ok(grid.every((week) => week.length === 7));
    assert.deepEqual(grid[0]?.map((c) => c?.day ?? null), [null, null, null, 1, 2, 3, 4]);
    assert.equal(grid[4]?.[5]?.day, 31);
    assert.equal(grid[4]?.[6], null);
  });

  it("gyakorlás nélkül minden nap nyitott, csak a mai van megjelölve", () => {
    const cells = monthGrid(today, []).flat().filter((c) => c !== null);
    assert.equal(cells.length, 31);
    assert.ok(cells.every((c) => c.state === "open"));
    assert.deepEqual(cells.filter((c) => c.today).map((c) => c.day), [12]);
  });

  it("a gyakorolt nap kész, az első gyakorlás utáni kimaradt nap kimaradt", () => {
    const cells = monthGrid(today, ["2026-10-05", "2026-10-07"]).flat().filter((c) => c !== null);
    const state = (day: number) => cells.find((c) => c.day === day)?.state;
    assert.equal(state(4), "open");
    assert.equal(state(5), "done");
    assert.equal(state(6), "missed");
    assert.equal(state(7), "done");
    assert.equal(state(12), "open");
    assert.equal(state(20), "open");
  });

  it("a mai gyakorolt nap kész és mai", () => {
    const cell = monthGrid(today, [today]).flat().find((c) => c?.day === 12);
    assert.equal(cell?.state, "done");
    assert.equal(cell?.today, true);
  });
});
