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
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (sliced[i][j] === 0) {
            for (let num = 1; num <= 9; num++) {
              sliced[i][j] = num;
              rfunc(new Board(sliced));
            }
          }
        }
      }
    }
  };

  rfunc(firstBoard);
  return resultArray.length ? resultArray : ["Not a Valid Board"];
};

module.exports = solver;
