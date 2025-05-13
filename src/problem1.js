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
