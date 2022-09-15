const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");

let obj = {};
for (i = 1; i <= 123456 * 2; i++) {
  for (j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
    if (i % j == 0) {
      obj[i] = true;
    }
  }
}
obj[2] = null;

input.forEach((v, i) => {
  v = parseInt(v);
  if (v > 0) {
    let count = 0;
    for (j = v + 1; j <= v * 2; j++) {
      if (!obj[j]) {
        count++;
      }
    }
    console.log(count);
  }
});
