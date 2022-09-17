const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("");

input.sort((a, b) => b - a);
console.log(input.join(""));
