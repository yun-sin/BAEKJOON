const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");
input = input.sort();
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);
let P = 0;

if (A == B) {
  B == C ? (P = 10000 + A * 1000) : (P = 1000 + A * 100);
} else {
  B == C ? (P = 1000 + B * 100) : (P = C * 100);
}

console.log(P);
