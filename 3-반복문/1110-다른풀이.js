// 다른사람 풀이
// 숫자열을 이용해 풀었음

const fs = require("fs");

const input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim() * 1;

let n = input;

let count = 0;

do {
  n = (n % 10) * 10 + ((parseInt(n / 10) + (n % 10)) % 10);
  console.log(n);
  count++;
} while (n !== input);

console.log(count);
