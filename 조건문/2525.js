const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
let time = input[0].split(" ");
let H = parseInt(time[0]);
let M = parseInt(time[1]);
let set = parseInt(input[1]);

H = H + parseInt((M + set) / 60);
M = (M + set) % 60;

H >= 24 ? (H = H - 24) : (H = H);

console.log(H + " " + M);
