const isAcceptedByPDA = require("../src/problem2");
describe("PDA Tests", () => {
  test("Accepts balanced and nested strings", () => {
    expect(isAcceptedByPDA("aabb")).toBe(true);
    expect(isAcceptedByPDA("aaabbb")).toBe(true);
  });

  test("Rejects unbalanced or non-nested strings", () => {
    expect(isAcceptedByPDA("aabbab")).toBe(false);
    expect(isAcceptedByPDA("abab")).toBe(false);
    expect(isAcceptedByPDA("aab")).toBe(false);
  });

  test("Rejects invalid characters", () => {
    expect(isAcceptedByPDA("aabx")).toBe(false);
  });
});
