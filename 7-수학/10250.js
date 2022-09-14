const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const T = input[0];

for (i = 1; i <= T; i++) {
  let test = input[i].trim().split(" ");
  // 높이
  let H = test[0];
  // 호수
  let W = test[1];
  // 몇번째 손님?
  let N = test[2];

  if (N % H != 0) {
    let flr = N % H;
    let num = parseInt(N / H) + 1;
    if (num < 10) {
      console.log(parseInt(flr + "0" + num));
    } else {
      console.log(parseInt(flr + "" + num));
    }
  } else {
    let flr = H;
    let num = parseInt(N / H);
    if (num < 10) {
      console.log(parseInt(flr + "0" + num));
    } else {
      console.log(parseInt(flr + "" + num));
    }
  }
}
