const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
let arr = input[1].split(" ");

let obj = {};

// 중복없이 순서대로 배열후 해당 인덱스를 값에 저장
arr2 = Array.from(new Set(arr)).sort((a, b) => a - b);

arr2.forEach((v, i) => {
  obj[v] = i;
});

const output = arr.map((v, i) => obj[v]);
console.log(output.join(" "));
