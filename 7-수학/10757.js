const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");
const A = input[0].split("");
const B = input[1].split("");

console.log(A.length);
console.log(B.length);
const gap = A.length - B.length;

if (gap > 0) {
  for (i = 1; i <= gap; i++) {
    B.unshift("0");
  }
} else if (gap < 0) {
  for (i = 1; i <= -gap; i++) {
    A.unshift("0");
  }
}

console.log(A);
console.log(B);

const len = A.length;
let arr = new Array(len);
console.log(arr);
let nextLev = 0;
for (i = len - 1; i >= 0; i--) {
  let sum = +A[i] + +B[i] + +nextLev;
  if (sum >= 10) {
    sum -= 10;
    nextLev = 1;
  } else {
    nextLev = 0;
  }
  arr[i] = sum;

  if (i == 0 && nextLev == 1) {
    arr.unshift(1);
  }
}
console.log(arr);
console.log(arr.length);
let output = "";
for (k of arr) {
  output += k;
}
console.log(output);
