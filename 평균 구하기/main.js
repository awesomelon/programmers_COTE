function solution(arr) {
  var totalSum = arr.reduce((prev, acc) => (prev += acc), 0);
  return totalSum / arr.length;
}
