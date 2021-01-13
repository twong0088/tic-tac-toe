const prompt = require('prompt');

let board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
console.log(`board layout: \n1 2 3\n4 5 6 \n7 8 9\n`)

const checkWin = () => {
  if ((board[0] === board[1] && board[1] === board[2] && board[0] === 'X') || (board[3] === board[4] && board[4] === board[5] && board[3] === 'X') || (board[6] === board[7] && board[7] === board[8] && board[6] === 'X') || (board[0] === board[3] && board[3] === board[6] && board[0] === 'X') || (board[1] === board[4] && board[4] === board[7] && board[1] === 'X') || (board[2] === board[5] && board[5] === board[8] && board[2] === 'X') || (board[0] === board[4] && board[4] === board[8] && board[0] === 'X') || (board[2] === board[4] && board[4] === board[6] && board[2] === 'X')) {
    console.log(`current board:\n${board[0]} ${board[1]} ${board[2]}\n${board[3]} ${board[4]} ${board[5]}\n${board[6]} ${board[7]} ${board[8]}\n`);
    console.log('X wins')
    return true;
  } else if (
    (board[0] === board[1] && board[1] === board[2] && board[0] === 'O') || (board[3] === board[4] && board[4] === board[5] && board[3] === 'O') || (board[6] === board[7] && board[7] === board[8] && board[6] === 'O') || (board[0] === board[3] && board[3] === board[6] && board[0] === 'O') || (board[1] === board[4] && board[4] === board[7] && board[1] === 'O') || (board[2] === board[5] && board[5] === board[8] && board[2] === 'O') || (board[0] === board[4] && board[4] === board[8] && board[0] === 'O') || (board[2] === board[4] && board[4] === board[6] && board[2] === 'O')) {
      console.log(`current board:\n${board[0]} ${board[1]} ${board[2]}\n${board[3]} ${board[4]} ${board[5]}\n${board[6]} ${board[7]} ${board[8]}\n`);
      console.log('O wins')
      return true;
    } else if (board.indexOf('_') === -1) {
      console.log(`current board:\n${board[0]} ${board[1]} ${board[2]}\n${board[3]} ${board[4]} ${board[5]}\n${board[6]} ${board[7]} ${board[8]}\n`);
      console.log('game tied');
      return true;
    } else {
      return false;
    }
}
const getIndex = (xTurn) => {
  console.log(`current board:\n${board[0]} ${board[1]} ${board[2]}\n${board[3]} ${board[4]} ${board[5]}\n${board[6]} ${board[7]} ${board[8]}\n`);
  gameOver = true;
  if (xTurn) {
    console.log('Turn: X');
  } else {
    console.log('Turn: O');
  }

  console.log('\nPlease enter valid index: ')
  prompt.start();
  prompt.get(['index'], function (err, result) {
    //
    // Log the results.
    //
    console.log('  index: ' + result.index);
    const index = Math.round(Number(result.index));
    if (index >= 1 && index <= 9 && board[index - 1] === '_') {
      if (xTurn) {
        board[index - 1] = 'X'
      } else {
        board[index - 1] = 'O'
      }
      if (!checkWin()) {
        getIndex(!xTurn);
      };
    } else {
      console.log('invalid move. Please try again!!!');
      getIndex(xTurn);
    }
  });
}
getIndex(true);
// console.log('hello world');
