// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  if (!(0 <= h && h <= 23) || !(0 <= m && m <= 59) || !(0 <= s && s <= 59)) {
    console.log(
      "Invalid input values. Please make sure the input values are within the specified constraints."
    );
    return;
  }

  // Calculate time since midnight in milliseconds
  let milliseconds = (h * 3600 + m * 60 + s) * 1000;
  return milliseconds;
}
