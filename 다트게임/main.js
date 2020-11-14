function solution(_dartResult) {
  let dartResult = [..._dartResult];
  let parseDartResult = [];
  let temp = [];
  let cursor = 0;
  let tempStr = '';

  const multiplication = (item, index, origin) => {
    if (index === origin.length - 1 || index === origin.length - 2) {
      return (item *= 2);
    }
    return item;
  };

  const negative = (item, index, origin) => {
    if (index === origin.length - 1) {
      return -item;
    }
    return item;
  };

  const add = (prev, acc) => (prev += acc);

  while (cursor < dartResult.length) {
    const currentValue = dartResult[cursor];

    if (isNaN(parseInt(currentValue))) {
      tempStr += currentValue;
      parseDartResult.push(tempStr);
      cursor = 0;
      tempStr = '';
    } else {
      tempStr += currentValue;
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
      temp = temp.map(multiplication);
    }

    if (item === '#') {
      temp = temp.map(negative);
    }
  });

  return temp.reduce(add, 0);
}
