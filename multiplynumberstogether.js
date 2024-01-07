//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiplyNumbersTogether(num) {
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  alert(product);
}
multiplyNumbersTogether([10, 20, 30]);
