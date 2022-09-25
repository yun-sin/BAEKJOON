const { reverse } = require("dns");
const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require("process");
let input = fs.readFileSync("BAEKJOON/dev/stdin.txt").toString().trim();
const N = parseInt(input);
console.log(N);
let arr = new Array(N).fill(0).map((v, i) => i + 1);
let A = arr.reverse();
console.log(A);

// 큰 줄기 : 빅타겟 B 또는 C에 i층을 쌓고 싶다. i= 1~ N (타겟이 B일때 C는 비타겟)
// 일단 A에서  빅타겟에 i층 크기의 기반암을 옮긴다.(시작)
// 작은 줄기 : 그 이후 j = 1~i
// 이전에 쌓은 i가 홀수라면 빅타겟에 짞수라면 A로 시작
// 원래있떤것과 j는 별개로 센다.
// j층이 완성되면 A또는 타겟에 번갈아 깐다.
// 이전 j를 쌓은타겟을 제외한  나머지 두 타겟에 j층을 번갈아 쌓음
// (큰줄기 목표타겟 B일떄) j는 1부터 i-1층까지 B와 C에 번갈아 쌓음  그러고
