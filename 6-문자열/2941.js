const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
let output = input.replaceAll("c=", "1");
output = output.replaceAll("c-", "2");
output = output.replaceAll("dz=", "3");
output = output.replaceAll("d-", "4");
output = output.replaceAll("lj", "5");
output = output.replaceAll("nj", "6");
output = output.replaceAll("s=", "7");
output = output.replaceAll("z=", "8");

console.log(output.length);
