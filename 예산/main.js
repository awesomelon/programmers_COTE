function solution(d, budget) {
  var answer = 0;

  const sortedD = d.sort((a, b) => a - b);
  let cursor = 0;
  let goal = 0;

  while (cursor < sortedD.length) {
    if (goal <= budget) {
      goal += sortedD[cursor];
      answer++;
    }

    if (goal > budget) {
      goal -= sortedD[cursor];
      answer--;
    }

    cursor++;
  }

  return answer;
}
