const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
input = input.trim().toUpperCase().split("");

// JSON 형태로 각 문자의 개수를 넣어줌
const test = {};
input.forEach((v) => {
  if (!test[v]) {
    test[v] = 1;
  } else {
    test[v] += 1;
  }
});

// max에 제일 큰 속성값을 넣어줌
let max = 0;
let alpha = "";
let arr = [];
for (let k in test) {
  arr.push(test[k]);
  if (test[k] > max) {
    max = test[k];
    alpha = k;
  }
}

// 제일 큰 값이 1개보다 많을 경우 count>1
let count = 0;
for (let u in test) {
  if (test[u] == max) {
    count++;
  }
}

if (count > 1) {
  console.log("?");
} else {
  console.log(alpha);
}
