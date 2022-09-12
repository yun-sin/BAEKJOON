const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

// 42로 나눈 나머지를 arr에 넣어줌
let arr = [];
input.forEach((v, i) => {
  arr.push(parseInt(v) % 42);
});
// console.log(arr);

// i=0일때 j=1~9 까지 비교후 같은게 있으면
// arr[j]를 "n"으로 바꿈
// 만약 나머지가 같은것이 3개이상일 경우 후에 또 비교하는 것을 막기 위함
for (i = 0; i < arr.length - 1; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1, "n");
    }
  }
}
// arr = [  39, 40,  41,  0,   1,  2,  'n', 'n', 'n', 'n']

// 배열의 원소 10개 중 "n"인 것의 갯수를 빼줌 (중복인 것들)
let count = 10;
arr.forEach((v) => {
  if (v == "n") {
    count--;
  }
});
// console.log(arr);
console.log(count);
