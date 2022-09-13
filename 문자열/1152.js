const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
input = input.trim().toUpperCase().split(" ");
console.log(input[0] === "" ? 0 : input.length);
