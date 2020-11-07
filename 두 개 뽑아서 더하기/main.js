function solution(numbers) {
  var result = [];

  while (numbers.length) {
    const first = numbers.shift();

    for (let i = 0; i < numbers.length; i++) {
      let sum = first + numbers[i];
      result.push(sum);
    }
  }

  return Array.from(new Set(result.sort((a, b) => a - b)));
}
