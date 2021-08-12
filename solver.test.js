const { test, expect, describe } = require("@jest/globals");
const solver = require("./solver");
const Board = require("./board");

describe("Single Row Tests", () => {
  test("checks single row for validity", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkRow(0)).toBe(true);
  });

  test("checks single row for doubled values", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 8],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkRow(0)).toBe(false);
  });
});

describe("ALL Row Tests", () => {
  test("checks ALL rows for validity", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ]);

    expect(board.checkAllRows()).toBe(true);
  });

  test("checks ALL rows for repeated values", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 4, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ]);

    expect(board.checkAllRows()).toBe(false);
  });
});

describe("Single Column Tests", () => {
  test("checks single column for validity", () => {
    const board = new Board([
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 0, 0, 0, 0, 0, 0, 0, 0],
      [5, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkColumn(0)).toBe(true);
  });

  test("checks single column for doubled values", () => {
    const board = new Board([
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 0, 0, 0, 0, 0, 0, 0, 0],
      [5, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkColumn(0)).toBe(false);
  });
});

describe("ALL Column Tests", () => {
  test("checks ALL columns for validity", () => {
    const board = new Board([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ]);

    expect(board.checkAllColumns()).toBe(true);
  });

  test("checks ALL columns for repeated values", () => {
    const board = new Board([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [7, 7, 7, 7, 7, 7, 7, 6, 7],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
    ]);

    expect(board.checkAllColumns()).toBe(false);
  });
});

describe("Generating Quadrants from Coordinates", () => {
  test("produces a valid quadrant from a set of coordinates", () => {
    const board = new Board();

    expect(board.findQuadrant(1, 1)).toBe(1);
    expect(board.findQuadrant(1, 4)).toBe(2);
    expect(board.findQuadrant(1, 7)).toBe(3);
    expect(board.findQuadrant(4, 1)).toBe(4);
    expect(board.findQuadrant(4, 4)).toBe(5);
    expect(board.findQuadrant(4, 7)).toBe(6);
    expect(board.findQuadrant(7, 1)).toBe(7);
    expect(board.findQuadrant(7, 4)).toBe(8);
    expect(board.findQuadrant(7, 7)).toBe(9);
  });
});

describe("Single Quadrant Tests", () => {
  test("checks single quadrant for validity", () => {
    const board = new Board([
      [1, 2, 3, 0, 0, 0, 0, 0, 0],
      [4, 5, 6, 0, 0, 0, 0, 0, 0],
      [7, 8, 9, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkQuadrant(1)).toBe(true);
  });

  test("checks single quadrant for repeated values", () => {
    const board = new Board([
      [1, 2, 3, 0, 0, 0, 0, 0, 0],
      [4, 4, 6, 0, 0, 0, 0, 0, 0],
      [7, 8, 9, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(board.checkQuadrant(1)).toBe(false);
  });
});

describe("ALL Quadrant Tests", () => {
  test("checks ALL quadrants for validity", () => {
    const board = new Board([
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
    ]);

    expect(board.checkAllQuadrants()).toBe(true);
  });

  test("checks ALL quadrants for repeated values", () => {
    const board = new Board([
      [1, 2, 2, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
      [1, 2, 3, 1, 2, 3, 1, 2, 3],
      [4, 5, 6, 4, 5, 6, 4, 5, 6],
      [7, 8, 9, 7, 8, 9, 7, 8, 9],
    ]);

    expect(board.checkAllQuadrants()).toBe(false);
  });
});

describe("Completed Board Tests", () => {
  test("returns true for a filled in board", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ]);

    expect(board.isFilledIn()).toBe(true);
  });

  test("returns false due to incomplete board", () => {
    const board = new Board([
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ]);

    expect(board.isFilledIn()).toBe(false);
  });

  test("checks a completed board for validity", () => {
    const board = new Board([
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ]);

    expect(board.checker()).toBe(true);
  });

  test("checks a completed board for errors", () => {
    const board = new Board([
      [5, 3, 4, 6, 7, 8, 9, 1, 1],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ]);

    expect(board.checker()).toBe(false);
  });
});

describe("Generating Complete Boards", () => {
  test("returns the input board if it is already valid", () => {
    const board = new Board([
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ]);

    expect(solver(board)).toBeInstanceOf(Array);
  });

  test("returns error if board is impossible to solve", () => {
    const board = new Board([
      [5, 3, 4, 6, 7, 0, 0, 0, 5],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ]);

    expect(solver(board)).toBeInstanceOf(Array);
  });

  test("generates a valid board from a partially filled in board", () => {
    const solution = solver(
      new Board([
        [6, 0, 0, 8, 0, 0, 3, 0, 0],
        [5, 0, 0, 0, 2, 0, 0, 0, 0],
        [1, 0, 0, 4, 0, 3, 0, 5, 6],
        [0, 6, 1, 0, 0, 0, 5, 9, 8],
        [9, 0, 4, 6, 0, 5, 0, 0, 2],
        [8, 3, 5, 0, 0, 9, 7, 0, 0],
        [3, 0, 9, 5, 0, 8, 4, 0, 0],
        [7, 8, 0, 0, 4, 2, 9, 1, 0],
        [0, 0, 2, 0, 0, 0, 0, 8, 0],
      ])
    );
    console.log(solution[0]);
    expect(solution[0]).toBeInstanceOf(Array);
  });
});
