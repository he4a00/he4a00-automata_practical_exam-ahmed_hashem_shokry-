const DFA = require("../src/problem1");

describe("DFA Tests", () => {
  let dfa;
  beforeEach(() => {
    dfa = new DFA();
  });

  test("Accepts strings with number of 1s divisible by 3", () => {
    expect(dfa.accepts("111")).toBe(true); // 3 ones
    expect(dfa.accepts("10101")).toBe(true); // 3 ones
    expect(dfa.accepts("000")).toBe(true); // 0 ones
  });

  test("Rejects strings with invalid counts", () => {
    expect(dfa.accepts("110")).toBe(false); // 2 ones
    expect(dfa.accepts("1")).toBe(false); // 1 ones
  });

  test("Rejects invalid characters", () => {
    expect(dfa.accepts("102")).toBe(false); // '2' is invalid
    expect(dfa.accepts("abc")).toBe(false);
  });
});
