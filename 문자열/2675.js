const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
input = input.split("\n");
const S = input[0];
for (i = 1; i <= S; i++) {
  const test = input[i].split(" ");
  const R = test[0];
  const S = test[1];
  let P = "";
  for (j = 0; j < S.length; j++) {
    for (k = 0; k < R; k++) {
      P += S[j];
    }
  }
  console.log(P);
}
