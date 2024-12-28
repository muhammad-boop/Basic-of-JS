//! Task: Filter Out Even Numbers
// ! You have an array of numbers, and you need to create a new array that only contains the odd numbers (i.e., numbers that are not divisible by 2). Use the filter function to solve this.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = numbers.filter(function (num) {
  if (num % 2 != 0) {
    return true;
  }
});

console.log(odd);
