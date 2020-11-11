function solution(x, n) {
  var answer = Array(n).fill(x);
  return answer.map((v, i) => v * (i + 1));
}
