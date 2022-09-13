const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
input.forEach((v, i) => {
  let inin = v.split(" ");
  let A = parseInt(inin[0]);
  let B = parseInt(inin[1]);
  if (A > 0) {
    console.log(A + B);
  }
});
