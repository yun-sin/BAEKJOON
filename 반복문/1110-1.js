const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
let input2 = input; // 계속 바뀌는 좌항값
input += "";
let output = "";
let count = 0;

while (parseInt(input) != parseInt(output)) {
  if (input2 < 10) {
    let B = parseInt(input);
    output = "" + B;
    input2 = output;
  } else {
    input2 += "";
    let A = input2[0];
    let B = input2[1];
    let C = parseInt(A) + parseInt(B);
    if (C < 10) {
      output = "" + B + C;
    } else {
      C += "";
      output = "" + B + C[1];
    }
    input2 = output;
  }
  console.log(input2);
  count++;
}
console.log(count);
