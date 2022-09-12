const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = input.split("\n");
const N = input[0];
let arr = input[1];
arr = arr.split(" ");

arr.sort((a, b) => {
  if (parseInt(a) > parseInt(b)) {
    return 1;
  } else {
    return -1;
  }
  8;
});

console.log(arr[0] + " " + arr[N - 1]);
