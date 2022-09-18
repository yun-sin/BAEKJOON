const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input[0].split(" ")[0];
const K = input[0].split(" ")[1];
const A = input[1].split(" ");
let count = 0;
function merge(left, right) {
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
      count++;
    } else {
      result.push(right.shift());
      count++;
    }
  }

  return [...result, ...left, ...right];
}

function merge_sort(array) {
  if (array.length === 1) return array;
  const q = Math.floor(array.length / 2);
  const left = array.slice(0, q);
  const right = array.slice(q);
  return merge(merge_sort(left), merge_sort(right));
}

console.log(A);
console.log(merge_sort(A));
console.log(count);
