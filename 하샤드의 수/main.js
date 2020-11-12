function solution(x) {
  var t = [...`${x}`].reduce((prev, acc) => (prev += parseInt(acc)), 0);
  return x % t === 0;
}
