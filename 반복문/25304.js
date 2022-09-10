const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
let X = parseInt(input[0]);
let N = parseInt(input[1]);
let sum = 0;
for (let i = 2; i <= N + 1; i++) {
  let stuff = input[i].split(" ");
  let a = parseInt(stuff[0]);
  let b = parseInt(stuff[1]);
  sum += a * b;
}
sum == X ? console.log("Yes") : console.log("No");
