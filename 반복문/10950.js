const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
let ts = parseInt(input[0]);

for (i = 1; i <= ts; i++) {
  let test = input[i].split(" ");
  let A = parseInt(test[0]);
  let B = parseInt(test[1]);
  console.log(A + B);
}
