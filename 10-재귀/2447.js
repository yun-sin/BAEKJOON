const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
const N = parseInt(input);
let mini = ["***", "* *", "***"];

function star(N) {
  let blnk = " ".repeat(N / 3);
  if (N == 3) {
    return mini;
  } else {
    const arr = [];
    let i = 0;
    while (i <= N / 3 / 2) {
      let k = star(N / 3)[i];
      arr[i] = k + k + k;
      arr[N / 3 - 1 - i] = arr[i];

      arr[i + N / 3] = k + blnk + k;
      arr[(2 * N) / 3 - 1 - i] = arr[i + N / 3];

      arr[i + (2 * N) / 3] = arr[i];
      arr[N - 1 - i] = arr[i];
      i++;
    }
    return arr;
  }
}

console.log(star(243).join("\n"));
