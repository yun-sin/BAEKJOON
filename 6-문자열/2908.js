const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
input = input.split(" ");

let A = input[0];
let B = input[1];

A = ("" + A).split("");
B = ("" + B).split("");

let tmp = A[0];
A[0] = A[2];
A[2] = tmp;
let tmp2 = B[0];
B[0] = B[2];
B[2] = tmp2;

let revA = "";
A.forEach((v) => {
  revA += v;
});
revA = parseInt(revA);
let revB = "";
B.forEach((v) => {
  revB += v;
});
revB = parseInt(revB);

if (revA > revB) {
  console.log(revA);
} else {
  console.log(revB);
}
