const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = parseInt(input[0]);

const array = new Array(N + 1);
array.fill(0);

for (let i = 0; i < input.length; i++) {
  array[input[i]]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}
