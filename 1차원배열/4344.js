const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

const C = input[0];
// console.log(input);

for (i = 1; i <= C; i++) {
  input[i] = input[i].split(" ");
  let N = input[i].shift();
  // console.log("N: " + N);
  // console.log(input[i]);

  let avg = input[i].reduce((a, c) => (a = parseInt(a) + parseInt(c))) / parseInt(N);
  // console.log("avg: " + avg);

  let fil = input[i].filter((v) => {
    if (v > avg) {
      return true;
    } else {
      return false;
    }
  });
  // console.log("fil: " + fil);

  console.log(((fil.length / parseInt(N)) * 100).toFixed(3) + "%");
}
