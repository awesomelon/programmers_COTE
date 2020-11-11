function solution(arr1, arr2) {
  var answer = arr1.map((v, i) => {
    return v.map((v2, j) => {
      return v2 + arr2[i][j];
    });
  });
  return answer;
}
