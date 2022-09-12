// 1부터 9999까지 모든 정수의 배열 man
let man = [];
for (i = 1; i < 10000; i++) {
  man.push(i);
}

// 어떤 수로 인해 생성된 숫자를 담는 배열
// (셀프넘버가 아닌 수들)
let nonSelf = [];
// 1부터 10000까지의 수들이 생성하는 수를 nonSelf에 넣음
man.forEach((v, i) => {
  // v = 원래 수
  const nn = "" + v;

  // sum = v의 각자릿수를 더한 수
  let sum = 0;
  for (j = 0; j < nn.length; j++) {
    sum += parseInt(nn[j]);
  }

  let x = v + parseInt(sum);
  if (x < 10000) {
    nonSelf.push(x);
  }
});
nonSelf = nonSelf.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

// 셀프 넘버
// man의 원소중 에서 nonSelf에 없는 것들을 출력
for (i = 0; i < man.length; i++) {
  if (!nonSelf.includes(man[i])) {
    console.log(man[i]);
  }
}
