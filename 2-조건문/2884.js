const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");
const H = parseInt(input[0]);
const M = parseInt(input[1]);

let h,
  m = 0;

if (H != 0) {
  if (M < 45) {
    h = H - 1;
    m = M + 15;
  } else {
    h = H;
    m = M - 45;
  }
} else if (H == 0) {
  if (M < 45) {
    h = 23;
    m = M + 15;
  } else {
    h = 0;
    m = M - 45;
  }
}

console.log(h + " " + m);
