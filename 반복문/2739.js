const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);

for (i = 1; i <= 9; i++) {
  let gugu = input * i;
  console.log(input + " * " + i + " = " + gugu);
}
