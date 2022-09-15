const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const M = parseInt(input[0]);
const N = parseInt(input[1]);

let sum = 0;
let arr = [];
let num = 0;

for (i = M; i <= N; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      num = 0;
      break;
    } else {
      num = i;
    }
  }
  sum += num;
  if (num > 0) {
    arr.push(num);
  }
}
if (M <= 2 && N >= 2) {
  arr[0] = 2;
  sum += 2;
}

if (arr[0]) {
  console.log(sum);
  console.log(arr[0]);
} else {
  console.log(-1);
}
