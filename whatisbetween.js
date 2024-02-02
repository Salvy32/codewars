// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // Ensure that a is less than b
  if (a >= b) {
    console.log("Invalid input. Please make sure a is less than b.");
    return [];
  }

  // Create an array of integers from a to b (inclusive)
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}
