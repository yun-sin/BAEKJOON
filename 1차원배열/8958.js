const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

const N = parseInt(input[0]);

for (i = 1; i <= N; i++) {
  let count = 0;
  let K = input[i].split("X");

  K.forEach((v) => {
    // 연속된 O갯수 = X
    let X = v.trim().length;

    if (parseInt(X) > 0) {
      let sum = 0;

      // X!
      for (j = 1; j <= X; j++) {
        sum += j;
      }
      // j말고 i를 넣었다가 위의 조건문과 겹쳐서 이상한 결과가 나왔었다.

      count += sum;
    } else {
      count += 0;
    }
  });
  console.log(count);
}
