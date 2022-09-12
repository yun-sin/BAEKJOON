const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

input = input.split("\n");

let result = input.reduce((a, c) => {
  if (parseInt(a) < parseInt(c)) {
    return c;
  } else {
    return a;
  }
});

console.log(result);
console.log(input.indexOf(result) + 1);
