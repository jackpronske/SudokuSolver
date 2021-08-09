const { test, expect, describe } = require("@jest/globals");
const solver = require("./solver");
const Board = require("./board");

describe("Single Row Tests", () => {
  test("checks single row for validity", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(board.checkRow(0)).toBe(true);
  });

  // test("checks single row for empty values", () => {
  //   const board = new Board([
  //     [1, 2, 3, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //   ]);

  //   expect(board.checkRow(0)).toBe(false);
  // });

  test("checks single row for doubled values", () => {
    const board = new Board([
      [1, 2, 3, 3],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(board.checkRow(0)).toBe(false);
  });
});

describe("ALL Row Tests", () => {
  test("checks ALL rows for validity", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ]);

    expect(board.checkAllRows()).toBe(true);
  });

  // test("checks ALL rows for empty values", () => {
  //   const board = new Board([
  //     [1, 2, 3, 4],
  //     [1, 2, 3, 4],
  //     [1, 2, 0, 4],
  //     [1, 2, 3, 4],
  //   ]);

  //   expect(board.checkAllRows()).toBe(false);
  // });

  test("checks ALL rows for repeated values", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [1, 3, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ]);

    expect(board.checkAllRows()).toBe(false);
  });
});

describe("Single Column Tests", () => {
  test("checks single column for validity", () => {
    const board = new Board([
      [1, 0, 0, 0],
      [3, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 0, 0, 0],
    ]);

    expect(board.checkColumn(0)).toBe(true);
  });

  test("checks single column for doubled values", () => {
    const board = new Board([
      [1, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [4, 0, 0, 0],
    ]);

    expect(board.checkColumn(0)).toBe(false);
  });
});

describe("ALL Column Tests", () => {
  test("checks ALL columns for validity", () => {
    const board = new Board([
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
    ]);

    expect(board.checkAllColumns()).toBe(true);
  });

  test("checks ALL columns for repeated values", () => {
    const board = new Board([
      [1, 1, 1, 1],
      [2, 1, 2, 2],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
    ]);

    expect(board.checkAllColumns()).toBe(false);
  });
});

describe("Single Quadrant Tests", () => {
  test("checks single quadrant for validity", () => {
    const board = new Board([
      [1, 2, 0, 0],
      [3, 4, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(board.checkQuadrant(1)).toBe(true);
  });

  test("checks single quadrant for repeated values", () => {
    const board = new Board([
      [1, 2, 0, 0],
      [4, 4, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(board.checkQuadrant(1)).toBe(false);
  });
});

describe("ALL Quadrant Tests", () => {
  test("checks ALL quadrants for validity", () => {
    const board = new Board([
      [1, 2, 1, 2],
      [3, 4, 3, 4],
      [1, 2, 1, 2],
      [3, 4, 3, 4],
    ]);

    expect(board.checkAllQuadrants()).toBe(true);
  });

  test("checks ALL quadrants for repeated values", () => {
    const board = new Board([
      [1, 2, 1, 2],
      [3, 4, 3, 4],
      [1, 1, 1, 2],
      [3, 4, 3, 4],
    ]);

    expect(board.checkAllQuadrants()).toBe(false);
  });
});

describe("Generating Quadrants from Coordinates", () => {
  test("produces a valid quadrant from a set of coordinates", () => {
    const board = new Board();

    expect(board.findQuadrant(0, 0)).toBe(1);
  });
});

describe("Completed Board Tests", () => {
  test("checks a completed board for empty figures", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ]);

    expect(board.isFilledIn()).toBe(true);
  });

  test("checks an incomplete board for empty figures", () => {
    const board = new Board([
      [1, 2, 3, 0],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 0, 0],
    ]);

    expect(board.isFilledIn()).toBe(false);
  });

  test("checks a completed board for validity", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ]);

    expect(board.checker()).toBe(true);
  });

  test("checks a completed board for errors", () => {
    const board = new Board([
      [1, 2, 1, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ]);

    expect(board.checker()).toBe(false);
  });
});

describe("Generating Complete Boards", () => {
  test("returns the input board if it is already valid", () => {
    const board = new Board([
      [1, 2, 3, 4],
      [3, 4, 1, 2],
      [2, 1, 4, 3],
      [4, 3, 2, 1],
    ]);

    expect(solver(board)).toBeInstanceOf(String);
  });

  test("returns error if board is impossible to solve", () => {
    const board = new Board([
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
    ]);

    expect(solver(board)).toBe(["Not a Valid Board"]);
  });

  test("generates a valid board from scratch", () => {
    expect(solver()).toBeInstanceOf(String);
  });

  test("generates a valid board from a partially filled in board", () => {
    expect(
      solver(
        new Board([
          [3, 0, 0, 0],
          [0, 0, 2, 0],
          [0, 1, 0, 0],
          [0, 0, 0, 1],
        ])
      )
    ).toBeInstanceOf(String);
  });
});
