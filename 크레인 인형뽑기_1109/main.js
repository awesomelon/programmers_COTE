function solution(board, moves) {
  var answer = 0;
  var result = [];

  for (let j = 0; j < moves.length; j++) {
    let move = moves[j] - 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][move] !== 0) {
        result.push(board[i][move]);
        board[i][move] = 0;
        break;
      }
    }
  }

  var count = 0;
  while (count < result.length) {
    var temp = result[count];
    count++;
    if (result[count] === temp) {
      result.splice(count - 1, 2);
      answer += 2;
      count = 0;
    }
  }

  return answer;
}
