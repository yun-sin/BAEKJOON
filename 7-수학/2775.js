const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\n");
const T = parseInt(input[0]);

for (j = 1; j <= T * 2; j += 2) {
  let k = parseInt(input[j]);
  let n = parseInt(input[j + 1]) - 1;
  // console.log(k);
  // console.log(n);

  let arr = [[1], [1]];
  for (i = 0; i <= 14; i++) {
    arr[i] = [1];
    arr[0][i] = i + 1;
  }
  // console.log(arr);

  for (x = 1; x <= 14; x++) {
    for (y = 1; y <= 14; y++) {
      let sum = 0;
      for (z = 0; z <= y; z++) {
        sum += parseInt(arr[x - 1][z]);
      }
      arr[x][y] = sum;
    }
  }

  // console.log(arr);
  console.log(arr[k][n]);
}
