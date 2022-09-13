const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const N = parseInt(input);
let count = 0;
for (i = 1; i <= N; i++) {
  if (i < 100) {
    count++;
  }

  let j = i;
  j = ("" + j).split("");
  if (+j[0] - +j[1] == +j[1] - +j[2]) {
    count++;
  }
}

console.log(count);
