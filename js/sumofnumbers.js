// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//two intergers

function getSum(a, b) {
  if (a === b) {
    return a;
  } else if (a < b) {
    return a + GetSum(a + 1, b);
  } else {
    return a + GetSum(a - 1, b);
  }
}
getSum(2, 4);

//or

function getSum(a, b) {
  return Math.abs(a - b) + (1 * (a + b)) / 2;
}

// Math.abs()
// The Math.abs() static method returns the absolute value of a number.
