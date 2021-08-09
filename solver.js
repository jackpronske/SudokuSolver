const Board = require("./board");

const solver = (board) => {
  let resultArray = [];
  let firstBoard = board || new Board();

  const rfunc = (currentBoard) => {
    if (
      !currentBoard.checkAllRows() ||
      !currentBoard.checkAllColumns() ||
      !currentBoard.checkAllQuadrants()
    ) {
      return;
    }
    if (currentBoard.isFilledIn()) {
      if (currentBoard.checker()) {
        let boardCopy = currentBoard.board;
        let sliced = JSON.parse(JSON.stringify(boardCopy));
        resultArray.push(sliced);
        return;
      }
    } else {
      let boardCopy = currentBoard.board;
      let sliced = JSON.parse(JSON.stringify(boardCopy));
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (sliced[i][j] === 0) {
            for (let num = 1; num <= 4; num++) {
              sliced[i][j] = num;

              rfunc(new Board(sliced));
            }
          }
        }
      }
    }
  };
  //if the current board is already filled in
  //we need to check if it's a valid board
  //if so, we'll push it to the result array
  //else, it's not a valid board, so we'll just return out of the function
  //this means the board still has empty spots, so we wants to start to loop through the board to fill those spots out
  //loop through the board
  //here we can check every coordinate of the board through currentBoard.board[i][j]
  //if the current coordinate is am empty value (0), then we'll loop through 1-4 and recurse with our new board
  //if its a number already, we want to make sure that number works in the board
  //we'll run a check on the current coordinate to see if there are duplicate values in the current Row/Column/Quad
  //if this fails, we return out of this execution context because this isn't a valid board

  rfunc(firstBoard);
  return resultArray.length ? resultArray : ["Not a Valid Board"];
};

module.exports = solver;
