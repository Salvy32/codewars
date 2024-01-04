// PEOPLE IN THE BUS
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
var number = function (busStops) {
  let num = 0;
  for (let i = 0; i < busStops.length; i++) {
    num += busStops[i][0] - busStops[i][0];
  }
};
//first number of people that get in the bus
//second number people who get off the bus
//return people still on the bus
