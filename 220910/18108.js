const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
year = parseInt(input) - 543;
console.log(year);
