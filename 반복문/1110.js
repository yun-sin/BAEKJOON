// 내 풀이
// 문자열을 이용해 자릿수를 표현

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString(); // 계속 바뀌는 좌항값
input = parseInt(input);
let count = 0;
let N = input;

do {
  N = "" + (N % 10) + (parseInt(parseInt(N / 10) + (N % 10)) % 10);
  count++;
} while (N != input);

console.log(count);
