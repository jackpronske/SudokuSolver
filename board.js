class Board {
  constructor(board) {
    this.board = board || [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  //rows is changed

  getRow(index) {
    return this.board[index];
  }

  checkRow(index) {
    const row = this.getRow(index);
    const rowObj = {};
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
      if (!this.checkRow(i)) return false;
    }
    return true;
  }

  //columns

  getColumn(index) {
    let column = [];
    for (let i = 0; i < 4; i++) {
      let currentRow = this.getRow(i);
      column.push(currentRow[index]);
    }
    return column;
  }

  checkColumn(index) {
    const column = this.getColumn(index);
    const colObj = {};
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
      if (!this.checkColumn(i)) return false;
    }
    return true;
  }

  //quadrants

  findQuadrant(rowInd, colInd) {
    if (rowInd < 2) {
      if (colInd < 2) {
        return 1;
      } else {
        return 2;
      }
    } else {
      if (colInd < 2) {
        return 3;
      } else {
        return 4;
      }
    }
  }

  getQuadrantArray(quad) {
    let quadrant;
    if (quad / 2 <= 1) {
      quadrant = [this.getRow(0), this.getRow(1)];
    } else {
      quadrant = [this.getRow(2), this.getRow(3)];
    }

    let newQuad = [];
    quad % 2 === 0
      ? quadrant.forEach((currentArray) => {
          newQuad.push(currentArray[2], currentArray[3]);
        })
      : quadrant.forEach((currentArray) => {
          newQuad.push(currentArray[0], currentArray[1]);
        });
    return newQuad;
  }

  checkQuadrant(index) {
    let quadrant = this.getQuadrantArray(index);
    const quadObj = {};
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 4; i++) {
      if (!this.checkQuadrant(i)) return false;
    }
    return true;
  }

  isFilledIn() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
    for (let i = 0; i < 4; i++) {
      if (this.getRow(i).reduce(add, 0) !== 10) return false;
      if (this.getColumn(i).reduce(add, 0) !== 10) return false;
      if (this.getQuadrantArray(i + 1).reduce(add, 0) !== 10) return false;
    }
    return true;
  }
}

module.exports = Board;
