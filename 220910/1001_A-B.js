const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);
console.log(A - B);
