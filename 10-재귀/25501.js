const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim().split("\r\n");
const T = input.shift();

function recursion(s, z, r, count) {
  if (r <= z) {
    return 1 + " " + count;
  } else if (s.charAt(z) != s.charAt(r)) {
    return 0 + " " + count;
  } else {
    return recursion(s, z + 1, r - 1, count + 1);
  }
}

// 문자열만 넣으면 recursion 실행시켜줌x
function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}

function main() {
  input.forEach((v, i) => {
    console.log(isPalindrome(v));
  });
}

main();
