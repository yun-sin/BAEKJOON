const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

// 1대당 이득
const sup = C - B;
if (sup >= 0) {
  console.log(Math.floor(A / sup) + 1);
} else {
  console.log(-1);
}
