const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

// 에라토스테네스의 체
let obj = { 1: true };
for (i = 1; i <= 10000; i++) {
  for (j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
    if (i % j == 0) {
      obj[i] = true;
    }
  }
}
obj[2] = null;

// 케이스별 반복문
for (i = 1; i <= T; i++) {
  let n = parseInt(input[i]);
  // console.group(n);
  let arr = [];
  for (j = 1; j < n; j++) {
    if (!obj[j]) {
      arr.push(j);
    }
  }

  // 골드바흐 파티션의 경우의 수
  let oArr = [];
  arr.forEach((a, b) => {
    arr.forEach((c, d) => {
      if (n == a + c) {
        oArr.push(a + " " + c);
      }
    });
  });
  // console.log(oArr);

  if (oArr.length % 2 == 1) {
    console.log(oArr[parseInt(oArr.length / 2)]);
  } else {
    console.log(oArr[parseInt(oArr.length / 2 - 1)]);
  }
  // console.groupEnd();
}
