const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
let input2 = input; // 계속 바뀌는 좌항값
input += "";

let count = 0;
let output = ""; // 선언을 미리 해줘야 조건문에 사용가능
while (input != output) {
  let A = 0;
  let B = 0;
  if (parseInt(input2) >= 10) {
    A = input2[0];
    B = input2[1];
  } else {
    A = 0;
    B = input2[0];
  }

  let C = parseInt(A) + parseInt(B) + "";
  if (C >= 10) {
    C = C[1];
  }

  output = B + C;
  input2 = output;
  count++;
}

console.log(count);
