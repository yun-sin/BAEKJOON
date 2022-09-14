const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString();
input = input.trim().split("\n");
const N = input[0];

// 글자들을 JSON에 넣음
// key 값의 해당 ( value )와 ( lastIndexOf(key) - indexOf(key) + 1 )를 비교
// 다 맞으면 count++;
// 모든 key가 해당하면 count의 값이
// key 배열의 길이와 같음
// 같다면 해당 단어는 그룹 단어

let groupNum = 0;
for (i = 1; i <= N; i++) {
  input[i].split("");
  const test = {};
  for (j = 0; j < input[i].length; j++) {
    test[input[i][j]] ? test[input[i][j]]++ : (test[input[i][j]] = 1);
  }

  const arr = Object.keys(test);

  let count = 0;

  for (key in test) {
    if (test[key] == input[i].lastIndexOf(key) - input[i].indexOf(key) + 1) {
      count++;
    }

    if (count == arr.length) {
      groupNum++;
    }
  }
}
console.log(groupNum);
