let fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().split("\n");
let gabage = input.map((x) => x % 42);
console.log(gabage);

let result = {};
gabage.forEach((x) => {
  if (result[x]) {
    result[x]++;
  } else {
    result[x] = 1;
  }
});
console.log(result[0]);
console.log(Object.keys(result).length);
