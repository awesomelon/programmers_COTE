function solution(N, stages) {
  var failRate = {};

  for (let i = 1; i <= N; i++) {
    failRate[i] =
      stages.filter((state) => state === i).length /
      (stages.filter((state) => state >= i).length || 1);
  }

  const answer = Object.keys(failRate)
    .sort((a, b) => {
      if (failRate[a] > failRate[b]) {
        return -1;
      }
      if (failRate[a] < failRate[b]) {
        return 1;
      }

      return 0;
    })
    .map((key) => parseInt(key));

  return answer;
}
