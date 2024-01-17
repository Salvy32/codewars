// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

function reverseLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    for (let k = 0; k <= alphabet.length - 1; k++) {
      if (str[i] == alphabet[k]) {
        word = `${word + str[i]}`;
      }
    }
  }

  return word;
}
