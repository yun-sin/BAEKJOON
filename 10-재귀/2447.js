const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
const N = parseInt(input);
let ss = 0;
function star(N) {
  ss = " ".repeat(N / 3);
  if (N == 3) {
    return ["***", "* *", "***"];
  } else {
    const arr = new Array(N);

    let i = 0;
    while (i <= N / 3 - 1) {
      arr[i] = star(N / 3)[i] + star(N / 3)[i] + star(N / 3)[i];
      arr[i + N / 3] = star(N / 3)[i] + ss + star(N / 3)[i];
      arr[i + (2 * N) / 3] = star(N / 3)[i] + star(N / 3)[i] + star(N / 3)[i];
      i++;
    }
    return arr;
  }
}

console.log(star(243).join("\n"));
