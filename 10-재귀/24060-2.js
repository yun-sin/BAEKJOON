const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = parseInt(input[0].split(" ")[0]);
const K = parseInt(input[0].split(" ")[1]);
const A = input[1].trim().split(" ");

// merge_sort
function merge_sort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
}
let count = 0;
let output;
// merge (병합)
function merge(A, p, q, r) {
  let i = p;
  let j = q + 1;
  let t = 0;
  let tmp = [];

  while (i <= q && j <= r) {
    if (+A[i] <= +A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  // 왼쪽 배열 부분이 남은 경우
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  // 오른쪽 배열 부분이 남은 경우
  while (j <= r) {
    tmp[t++] = A[j++];
  }

  i = p;
  t = 0;
  // 결과를 A에 저장
  while (i <= r) {
    A[i++] = tmp[t++];
    count++;
    if (count == K) {
      output = A[i - 1];
    }
  }
}
merge_sort(A, 0, N - 1);
if (count < K) {
  console.log(-1);
} else if (!output) {
} else {
  console.log(output);
}
