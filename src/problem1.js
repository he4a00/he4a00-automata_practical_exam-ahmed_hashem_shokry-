// function checkOnes(input) {
//   let counter = 0; // this is a counter, it increases each time we see a 1, and it stay at its current value if we see 0

//   // here we map over the input to see eact character on its own, like if it is 001 we se it as 0 => 0 => 1
//   for (const char of input) {
//     // here we check that if the single char that our loop at is equal to 1, if it is then we increase the cunter by 1 then see if it divisible by 3
//     if (char === "1") counter = (counter + 1) % 3;
//     else if (char !== "0") return false; // here we reject each character that is not 0 and 1 cuz this is a binary problem
//   }
//   return counter === 0; // so after we reset the counter to 0 after it reach 3
// }

// some test cases
// console.log(checkOnes("110"));
// console.log(checkOnes("111"));
// console.log(checkOnes("10101"));

class DFA {
  constructor() {
    // here we initialize the dfa
    this.startState = "q0"; // that is the starting state which means we counted 0 "1"
    this.acceptState = "q0"; // this is the only accepting state the number of ones is divisible by 3
    this.transitions = {
      // these are the transitions
      q0: { 0: "q0", 1: "q1" }, // number of ones currently is 1
      q1: { 0: "q1", 1: "q2" }, // number of ones currently is 2
      q2: { 0: "q2", 1: "q0" }, // number of ones currently is 3 which is the accepting state
    };
  }

  accepts(input) {
    let currentState = this.startState; // we start from the startState

    // process each symbol in the input string one by one:
    for (const symbol of input) {
      // Reject if the symbol is not '0' or '1'
      if (symbol !== "0" && symbol !== "1") {
        console.log(
          `Invalid character '${symbol}' in input. Only 0 and 1 are allowed.`
        );
        return false;
      }

      // example of waht is happening: If currentState is 'q0' and symbol is '1', move to 'q1'.
      currentState = this.transitions[currentState][symbol];
    }

    // After processing all symbols, check if we ended in the accept state (q0):
    return currentState === this.acceptState;
  }
}

module.exports = DFA;
