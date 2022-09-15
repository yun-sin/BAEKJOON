const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
const N = parseInt(input);
let qty = -1;
let tmp = 0;

if (N % 5 == 0) {
  qty = N / 5;
  return console.log(qty);
} else {
  for (i = 0; i <= parseInt(N / 5); i++) {
    tmp = N - (parseInt(N / 5) - i) * 5;
    if (tmp % 3 == 0) {
      qty = parseInt(N / 5) - i + parseInt(tmp / 3);
      return console.log(qty);
    }
  }
  console.log(qty);
}
