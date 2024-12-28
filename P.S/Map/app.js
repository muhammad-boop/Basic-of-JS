// Task: Convert a List of Temperatures

// You have an array of temperatures in Celsius, and you need to convert them into Fahrenheit using the formula:

// F = (C × 9/5) + 32

// Write a function that takes an array of temperatures in Celsius and returns a new array with the temperatures converted to Fahrenheit. Use the map function to solve this.

let temp_in_C = [20, 45, 12, 44];
let f = temp_in_C.map(function (val) {
  return (val * 9) / 5 + 32;
});

console.log(f);
