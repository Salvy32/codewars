//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNumber(arr) {
  let evens = [];
  arr.forEach((n) => {
    if (arr % 2 === 0) {
      evens.push(n);
    }
  });
  return evens;
}
evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
