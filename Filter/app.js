// Filter Functions in JS
// Hum filter functions use karte hai take hum condittion ki base par kuch kam kar saqqe or ye kam hume new array me return kare ga
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter(function (member) {
  if (member % 2 == 0) {
    return true;
  }
});
console.log(even);
// Output:
// [2,4,6,8,10]
