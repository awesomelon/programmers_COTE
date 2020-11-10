function solution(x, n) {
  var answer = Array(n)
    .fill(x)
    .map((v, i) => v * (i + 1));
  return answer;
}
