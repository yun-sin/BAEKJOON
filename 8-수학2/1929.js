const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");

const M = parseInt(input[0]);
const N = parseInt(input[1]);

if (M <= 2) {
  console.log(2);
}

let obj = { 1: true };

for (i = M; i <= N; i++) {
  for (j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
    if (i % j == 0) {
      obj[i] = true;
      break;
    }
  }

  if (!obj[i]) {
    console.log(i);
  }
}
