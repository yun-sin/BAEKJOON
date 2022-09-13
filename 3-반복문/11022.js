const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = input.split("\n");
const T = input[0];
let C = "";
for (i = 1; i <= T; i++) {
  let input2 = input[i].split(" ");
  let A = parseInt(input2[0]);
  let B = parseInt(input2[1]);
  C += "Case #" + i + ": " + A + " + " + B + " = " + (A + B) + "\n";
}
console.log(C);
