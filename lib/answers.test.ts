import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isNumericCorrect } from "./answers";

describe("isNumericCorrect", () => {
  it("pontos egyezés helyes", () => {
    assert.equal(isNumericCorrect("56", 56), true);
  });
  it("eltérő szám hibás", () => {
    assert.equal(isNumericCorrect("54", 56), false);
  });
  it("üres bevitel hibás, a 0 válasznál is", () => {
    assert.equal(isNumericCorrect("", 0), false);
    assert.equal(isNumericCorrect("0", 0), true);
  });
  it("vezető nulla nem számít", () => {
    assert.equal(isNumericCorrect("07", 7), true);
  });
  it("tűréssávon belül (a határt is beleértve) helyes", () => {
    assert.equal(isNumericCorrect("95", 100, 5), true);
    assert.equal(isNumericCorrect("105", 100, 5), true);
    assert.equal(isNumericCorrect("94", 100, 5), false);
    assert.equal(isNumericCorrect("106", 100, 5), false);
  });
  it("tűrés nélkül csak a pontos szám jó", () => {
    assert.equal(isNumericCorrect("99", 100), false);
  });
});
