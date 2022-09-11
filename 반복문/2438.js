const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const N = parseInt(input);
for (i = 0; i < N; i++) {
  let sum = "";
  for (j = 0; j < i + 1; j++) sum += "*";
  console.log(sum);
}
