const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input.shift();

const max = Math.max(...input);

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < input.length; i++) {
  array[parseInt(input[i])]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}
