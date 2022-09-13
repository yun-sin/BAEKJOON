const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
let input0 = input[0].split(" ");
const X = parseInt(input0[0]);
const N = parseInt(input0[1]);
let input1 = input[1].split(" ");

const d3 = input1.filter((v, i, arr) => {
  if (v < N) {
    return true;
  } else {
    return false;
  }
});

let output = "";
d3.forEach((v) => {
  output += v + " ";
});
console.log(output);
