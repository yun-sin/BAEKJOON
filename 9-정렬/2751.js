const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
input.shift();

input.sort((a, b) => a - b);
console.log(input.join("\n"));
