const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const N = input.shift();

// x가 앞에게 작으면 바꾸는데 만약 x가 같다면 y를 비교하고 바꿀지말지 정함
input.sort((a, b) => {
  let xa = parseInt(a.split(" ")[0]);
  let ya = parseInt(a.split(" ")[1]);
  let xb = parseInt(b.split(" ")[0]);
  let yb = parseInt(b.split(" ")[1]);

  if (ya > yb) {
    return 1;
  } else {
    if (ya == yb && xa > xb) {
      return 1;
    } else {
      return -1;
    }
  }
});

console.log(input.join(" "));
