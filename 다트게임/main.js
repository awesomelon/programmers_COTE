function solution(_dartResult) {
  let dartResult = [..._dartResult];
  let parseDartResult = [];
  let temp = [];
  let cursor = 0;
  let tempStr = '';

  while (cursor < dartResult.length) {
    if (isNaN(parseInt(dartResult[cursor]))) {
      tempStr += dartResult[cursor];
      parseDartResult.push(tempStr);
      cursor = 0;
      tempStr = '';
    } else {
      tempStr += dartResult[cursor];
    }
    dartResult.shift();
  }

  parseDartResult.forEach((item) => {
    if (item.indexOf('S') > -1) {
      temp.push((+item.split('S')[0]) ** 1);
    }

    if (item.indexOf('D') > -1) {
      temp.push((+item.split('D')[0]) ** 2);
    }

    if (item.indexOf('T') > -1) {
      temp.push((+item.split('T')[0]) ** 3);
    }

    if (item === '*') {
      temp = temp.map((item, i) => {
        if (i === temp.length - 1 || i === temp.length - 2) {
          return (item *= 2);
        } else {
          return item;
        }
      });
    }

    if (item === '#') {
      temp = temp.map((t, i) => {
        if (i === temp.length - 1) {
          return -t;
        } else {
          return t;
        }
      });
    }
  });

  const answer = temp.reduce((prev, acc) => (prev += acc), 0);
  return answer;
}
