const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input.shift();

input.sort((a, b) => parseInt(a) - parseInt(b));

console.log(input);
