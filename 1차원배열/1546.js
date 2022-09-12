const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

// 시험 본 과묵의 개수 N
const N = parseInt(input[0]);

// 점수의 배열
let grade = input[1].split(" ");

// 점수 중 최댓값 M
let M = parseInt(
  grade.reduce((a, c) => {
    if (parseInt(a) > parseInt(c)) {
      return a;
    } else {
      return c;
    }
  })
);

// 점수의 총합 sum
let sum = grade.reduce((a, c) => {
  return (a = parseInt(a) + parseInt(c));
});

// 새로운 평균() fakeAvg
let fakeAvg = (sum * 100) / (N * M);

console.log(fakeAvg);
