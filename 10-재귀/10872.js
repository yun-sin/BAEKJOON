const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();

const N = parseInt(input);

function f(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * f(x - 1);
  }
}

console.log(f(N));
