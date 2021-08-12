# SudokuSolver

An application in which to enter in any sudoku board and have it return a valid solution

As of right now, the program works entirely in the command line. Here's how to start the project:

- 'npm install' to get all dependencies (mainly if you want to run the tests if altering any of the board code)

- 'npm start' will run the program right in the command line, no need to even start up VSCode.

  - You'll receive a prompt to type in your input board 1 line at a time
  - To indicate a blank space, type '0'
  - Hit enter after typing 9 digits, repeat for all 9 rows

- The program will echo your input, then start calculating the solution (this could take a few minutes, my algo is kinda whack atm)

- After an amount of time.... The program should output the correct solution and exit process.
  - Feel free to 'npm start' again to test any other boards
