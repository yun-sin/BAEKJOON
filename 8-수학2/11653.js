const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
let N = parseInt(input[0]);

if (N > 1) {
  let i = 2;
  while (i < N) {
    if (N % i == 0) {
      N = N / i;
      console.log(i);
    } else {
      i++;
    }
  }
  console.log(N);
}
