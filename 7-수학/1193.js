const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split(" ");
const X = parseInt(input);
// 분자와 분모를 합한수가 2 3 4 ~
// 합한 수가 홀수인 경우 분모가 큰것부터 시작 ex) 1/4
// 합한 수가 짝수인 경우 분모가 작은 것부터 시작 ex) 3/1
// 저번 합이 3인 경우 3/1시작 index(2)
// 저번 합이 4인 경우 1/4 시작

// sum은 해당 회차만큼의 팩토리얼
let sum = 0;
let count = 1;
for (i = 1; i <= 10000000; i++) {
  sum += i;
  if (X <= sum) {
    const num = +sum - +X;
    if (count % 2 == 1) {
      return console.log(1 + num + "/" + (count - num));
    } else {
      return console.log(count - num + "/" + (1 + num));
    }
  }
  count++;
}
