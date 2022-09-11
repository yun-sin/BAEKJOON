const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const N = parseInt(input);
for (i = 0; i < N; i++) {
  let sum = ""; 
  for (j = N-1; j >i; j--) {
    sum += " ";
  }
  for (k = 0; k <= i; k++) {
    sum += "*";
  }
  console.log(sum);
}


// 1~ 5번줄
// 1번쨰 줄에선 4개의 공백 1개의 별
// 2번째 줄에선 3개의 공백 2개의 별
