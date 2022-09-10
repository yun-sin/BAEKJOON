const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");
let output = [1, 1, 2, 2, 2, 8];
let output2 = "";
for (i = 0; i < input.length; i++) {
  output2 += output[i] - input[i] + " ";
}
console.log(output2.trim());
