const simulateTM_WW = require("../src/problem3");

describe("Turing Machine ww Tests", () => {
  test("Accepts strings of form ww", () => {
    expect(simulateTM_WW("")).toBe(true);
    expect(simulateTM_WW("00")).toBe(true);
    expect(simulateTM_WW("0101")).toBe(true);
    expect(simulateTM_WW("111000111000")).toBe(true);
  });

  test("Rejects strings that are not of form ww", () => {
    expect(simulateTM_WW("0")).toBe(false);
    expect(simulateTM_WW("01")).toBe(false);
    expect(simulateTM_WW("0011")).toBe(false);
    expect(simulateTM_WW("1010")).toBe(true);
  });

  test("Handles edge cases", () => {
    expect(simulateTM_WW("000000")).toBe(true);
    expect(simulateTM_WW("000001")).toBe(false);
  });
});
