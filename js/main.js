//Code Wars
//Reverse words

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
