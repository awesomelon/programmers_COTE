function solution(strings, n) {
  return strings.sort((a, b) => {
    const _a = a[n];
    const _b = b[n];

    if (_a > _b) {
      return 1;
    }

    if (_a < _b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });
}
