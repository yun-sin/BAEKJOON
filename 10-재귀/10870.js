const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
const N = parseInt(input);
function f(x) {
  if (x <= 1) {
    return x;
  } else {
    return f(x - 2) + f(x - 1);
  }
}

console.log(f(N));
