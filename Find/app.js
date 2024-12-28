// Find
// Hum find ka use karte hai kesi bi vlaue ka first member find karne ke laye

let arr = [1, 2, 3, 4];
let ans = arr.find(function (val) {
  if (val == 2) {
    return val;
  }
});
console.log(ans);
