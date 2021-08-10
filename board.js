class Board {
  constructor(board) {
    this.board = board || [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  //testboard
  // let test = [
  //   [1,1,1,2,2,2,3,3,3],
  //   [1,1,1,2,2,2,3,3,3],
  //   [1,1,1,2,2,2,3,3,3],
  //   [4,4,4,5,5,5,6,6,6],
  //   [4,4,4,5,5,5,6,6,6],
  //   [4,4,4,5,5,5,6,6,6],
  //   [7,7,7,8,8,8,9,9,9],
  //   [7,7,7,8,8,8,9,9,9],
  //   [7,7,7,8,8,8,9,9,9],
  // ]

  //rows is changed

  getRow(index) {
    return this.board[index];
  }

  checkRow(index) {
    const row = this.getRow(index);
    const rowObj = {};
    for (let i = 0; i < 9; i++) {
      if (row[i] === 0) continue;
      rowObj[row[i]] ? rowObj[row[i]]++ : (rowObj[row[i]] = 1);
    }
    for (let i = 0; i < Object.values(rowObj).length; i++) {
      if (Object.values(rowObj)[i] > 1) {
        return false;
      }
    }
    return true;
  }

  checkAllRows() {
    for (let i = 0; i < 9; i++) {
      if (!this.checkRow(i)) return false;
    }
    return true;
  }

  //columns

  getColumn(index) {
    let column = [];
    for (let i = 0; i < 9; i++) {
      let currentRow = this.getRow(i);
      column.push(currentRow[index]);
    }
    return column;
  }

  checkColumn(index) {
    const column = this.getColumn(index);
    const colObj = {};
    for (let i = 0; i < 9; i++) {
      if (column[i] === 0) continue;
      colObj[column[i]] ? colObj[column[i]]++ : (colObj[column[i]] = 1);
    }
    for (let i = 0; i < Object.values(colObj).length; i++) {
      if (Object.values(colObj)[i] > 1) {
        return false;
      }
    }
    return true;
  }

  checkAllColumns() {
    for (let i = 0; i < 9; i++) {
      if (!this.checkColumn(i)) return false;
    }
    return true;
  }

  //quadrants

  findQuadrant(rowInd, colInd) {
    if (rowInd < 3) {
      if (colInd < 3) {
        return 1;
      }
      if (colInd < 6) {
        return 2;
      }
      return 3;
    }
    if (rowInd < 6) {
      if (colInd < 3) {
        return 4;
      }
      if (colInd < 6) {
        return 5;
      }
      return 6;
    }
    if (colInd < 3) {
      return 7;
    }
    if (colInd < 6) {
      return 8;
    }
    return 9;
  }

  getQuadrantArray(quadrant) {
    let correctRows = [];
    let resultArray = [];
    if (quadrant < 4) {
      correctRows.push(this.getRow(0), this.getRow(1), this.getRow(2));
      if (quadrant === 1) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][0],
            correctRows[i][1],
            correctRows[i][2]
          );
        }
      }
      if (quadrant === 2) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][3],
            correctRows[i][4],
            correctRows[i][5]
          );
        }
      }
      if (quadrant === 3) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][6],
            correctRows[i][7],
            correctRows[i][8]
          );
        }
      }
    } else if (quadrant < 7) {
      correctRows.push(this.getRow(3), this.getRow(4), this.getRow(5));
      if (quadrant === 4) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][0],
            correctRows[i][1],
            correctRows[i][2]
          );
        }
      }
      if (quadrant === 5) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][3],
            correctRows[i][4],
            correctRows[i][5]
          );
        }
      }
      if (quadrant === 6) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][6],
            correctRows[i][7],
            correctRows[i][8]
          );
        }
      }
    } else {
      correctRows.push(this.getRow(6), this.getRow(7), this.getRow(8));
      if (quadrant === 7) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][0],
            correctRows[i][1],
            correctRows[i][2]
          );
        }
      }
      if (quadrant === 8) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][3],
            correctRows[i][4],
            correctRows[i][5]
          );
        }
      }
      if (quadrant === 9) {
        for (let i = 0; i < correctRows.length; i++) {
          resultArray.push(
            correctRows[i][6],
            correctRows[i][7],
            correctRows[i][8]
          );
        }
      }
    }
    return resultArray;
  }

  checkQuadrant(index) {
    let quadrant = this.getQuadrantArray(index);
    const quadObj = {};
    for (let i = 0; i < 9; i++) {
      if (quadrant[i] === 0) continue;
      quadObj[quadrant[i]]
        ? quadObj[quadrant[i]]++
        : (quadObj[quadrant[i]] = 1);
    }
    for (let i = 0; i < Object.values(quadObj).length; i++) {
      if (Object.values(quadObj)[i] > 1) {
        return false;
      }
    }
    return true;
  }

  checkAllQuadrants() {
    for (let i = 1; i <= 9; i++) {
      if (!this.checkQuadrant(i)) return false;
    }
    return true;
  }

  isFilledIn() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  checker() {
    const add = (a, b) => {
      return a + b;
    };
    for (let i = 0; i < 9; i++) {
      if (this.getRow(i).reduce(add, 0) !== 45) return false;
      if (this.getColumn(i).reduce(add, 0) !== 45) return false;
      if (this.getQuadrantArray(i + 1).reduce(add, 0) !== 45) return false;
    }
    return true;
  }
}

module.exports = Board;
