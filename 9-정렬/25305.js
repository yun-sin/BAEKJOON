const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = parseInt(input[0].split(" ")[0]);
const k = parseInt(input[0].split(" ")[1]);
const grade = input[1].split(" ");

grade.sort((a,b) => a-b);
console.log(grade[N-k]);