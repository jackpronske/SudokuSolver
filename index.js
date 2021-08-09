const readline = require("readline");
const Board = require("./board");
const solver = require("./solver");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let userInput = [];
console.log(
  "Enter Board to be solved one line at a time (0 for blank spaces): "
);
rl.question("line 1: ", function (input1) {
  userInput.push(split(input1));
  rl.question("line 2: ", (input2) => {
    userInput.push(split(input2));
    rl.question("line 3: ", (input3) => {
      userInput.push(split(input3));
      rl.question("line 4: ", (input4) => {
        userInput.push(split(input4));
        rl.close();
      });
    });
  });
});

rl.on("close", function () {
  console.log("Input: ", userInput);
  console.log("Solution: ", solver(new Board(userInput))[0]);
  process.exit(0);
});

const split = (string) => {
  let input = string.split("").map((num) => {
    return Number(num);
  });
  return input;
};
