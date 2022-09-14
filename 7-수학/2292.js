const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");

// 1
// 7          6
// 19        12
// 37        18
// 61        24

const N = parseInt(input);

let flr = 1;
let count = 1;
for (i = 1; i < 1000000000; i++) {
  if (N <= flr) {
    return console.log(count);
  }
  count++;
  flr += 6 * i;
}
