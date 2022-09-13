const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
const S = input;
for (i = 97; i <= 122; i++) {
  console.log(S.indexOf(String.fromCharCode(i)));
}
