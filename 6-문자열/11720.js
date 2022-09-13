const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
const N = input[0];
const num = ("" + input[1]).split("");
let sum = num.reduce((a, c) => {
  return (a = +a + +c);
});
console.log(sum);
