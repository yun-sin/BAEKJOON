const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = parseInt(input);
let sum = 0;
for (i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
