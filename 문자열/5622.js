const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("");
let ascii = 0;
let second = 0;
input.forEach((v) => {
  ascii = v.charCodeAt();
  if (ascii < 68) {
    // 2
    second += 3;
  } else if (ascii < 71) {
    // 3
    second += 4;
  } else if (ascii < 74) {
    // 4
    second += 5;
  } else if (ascii < 77) {
    // 5
    second += 6;
  } else if (ascii < 80) {
    // 6
    second += 7;
  } else if (ascii < 84) {
    // 7
    second += 8;
  } else if (ascii < 87) {
    // 8
    second += 9;
  } else if (ascii < 91) {
    // 9
    second += 10;
  }
});
console.log(second);
