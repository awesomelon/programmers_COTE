function solution(board, moves) {
  let answer = 0;
  let result = [];

  for (let j = 0; j < moves.length; j++) {
    let move = moves[j] - 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][move]) {
        result.push(board[i][move]);
        board[i][move] = 0;
        break;
      }
    }
  }

  let count = 0;
  while (count < result.length) {
    let temp = result[count];
    count++;
    if (result[count] === temp) {
      result.splice(count - 1, 2);
      answer += 2;
      count = 0;
    }
  }

  return answer;
}
