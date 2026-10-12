import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  it("ugyanazokat az elemeket adja vissza", () => {
    assert.deepEqual([...shuffle([1, 2, 3, 4, 5])].sort(), [1, 2, 3, 4, 5]);
  });
  it("nem módosítja a bemenetet", () => {
    const input = [1, 2, 3];
    shuffle(input, () => 0);
    assert.deepEqual(input, [1, 2, 3]);
  });
  it("a megadott véletlenforrás szerint keverd", () => {
    assert.deepEqual(shuffle([1, 2, 3], () => 0), [2, 3, 1]);
  });
});
