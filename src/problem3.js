function simulateTM_WW(input) {
  const tape = input.split("");
  // we count the non blanks sympols on the tape
  const n = tape.length;

  // the language require it to be even, so we immediately reject if it is not even
  if (n % 2 !== 0) {
    return false;
  }

  // here we spilt it to two halves, first "w" and second "w"
  const half = n / 2;
  // replace characters in the first half with markers => move right to the second half => compare characters one by one
  const firstHalf = tape.slice(0, half);
  const secondHalf = tape.slice(half);

  // here we comapre the first hald and the second half, if they are not equal we reject the word
  for (let i = 0; i < half; i++) {
    if (firstHalf[i] !== secondHalf[i]) {
      return false;
    }
  }
  return true;
}

module.exports = simulateTM_WW;
