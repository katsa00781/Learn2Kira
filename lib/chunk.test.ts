import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { chunk } from "./chunk";

describe("chunk", () => {
  it("egyenlő sorokra oszt", () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
  });
  it("az utolsó sor rövidebb lehet", () => {
    assert.deepEqual(chunk([1, 2, 3], 2), [[1, 2], [3]]);
  });
  it("üres lista üres marad", () => {
    assert.deepEqual(chunk([], 2), []);
  });
});
