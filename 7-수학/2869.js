const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const V = parseInt(input[2]);

// 오르기 직전 , 이만큼만 오르고 나면 다음날 정상이다.
const last = V - A;

const oneDay = A - B;

console.log(Math.ceil(last / oneDay) + 1);
