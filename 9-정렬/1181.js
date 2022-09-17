const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input.shift();

// 중복 삭제
const arr = Array.from(new Set(input));
// 길이, 단어순 정렬
arr.sort((a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(arr.join("\n"));
