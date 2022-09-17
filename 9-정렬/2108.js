const { ifError } = require("assert");
const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = parseInt(input.shift());

let sum = 0;
input.forEach((v, i) => {
  sum += +v;
});

// 1. 산술평균
console.log(parseInt(Math.round(sum / N)));

// 2. 중앙값
let arr = input.sort((a, b) => a - b);
console.log(arr[parseInt(N / 2)]);

// 3. 최빈값
let obj = {};
arr.forEach((v, i) => {
  obj[parseInt(v)] ? obj[parseInt(v)]++ : (obj[parseInt(v)] = 1);
});

let times = 1;
for (k in obj) {
  if (obj[k] > times) {
    times = obj[k];
  }
}

let arr2 = [];
for (k in obj) {
  if (obj[k] == times) {
    arr2.push(k);
  }
}

arr2.sort((a, b) => a - b);
if (arr2.length > 1) {
  console.log(arr2[1]);
} else {
  console.log(arr2[0]);
}

// 4. 범위
let max = arr[arr.length - 1];
let min = arr[0];
console.log(+max - +min);
