const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input[0];
const data = input[1].split(" ");
let count = 0;

for (k of data) {
  let K = parseInt(k);
  if (K > 1) {
    for (i = 2; i < K; i++) {
      if (K % i == 0) {
        i = K;
        count--;
      }
    }
    count++;
  }
}

console.log(count);
