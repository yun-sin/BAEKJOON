const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = parseInt(input[0]);
let arr = [];

for (i = 1; i <= N; i++) {
  arr.push(parseInt(input[i]));
}
arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
for (k of arr) {
  console.log(k);
}
