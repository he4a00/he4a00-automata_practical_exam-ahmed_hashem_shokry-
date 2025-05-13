function isAcceptedByPDA(input) {
  let stack = []; // we use an array to simulate a stack like in the actual PDA problems
  let seenB = false; // this to check if there is an "a" after a "b"

  for (const c of input) {
    // we map over each character
    if (c === "a") {
      if (seenB) return false;
      //what we need to make is to find a string that has the same number of "a" and "b" so we check
      stack.push("a"); // if there is an "a" push it onto the stack.
    } else if (c === "b") {
      seenB = true;
      // now what happens if we find a b?
      // we check first if the stacj is empty, and of the last strign in the stack nor equal a
      // if so we return false cuz we want to pop an a and the stack is not empty
      if (stack.length === 0 || stack.pop() !== "a") {
        // Pop and check if top was 'a'.
        return false; // Unmatched 'b' or invalid symbol.
      }
    } else {
      return false; // reject for invalid characters that is not in the language
    }
  }

  return stack.length === 0;
}

module.exports = isAcceptedByPDA;
