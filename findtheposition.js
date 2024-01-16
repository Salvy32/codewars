// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(l) {
  var lett = " abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + [...lett].indexOf(l);
}
