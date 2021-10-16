import * as game from '../src/index.js';

const getCorrectAnswer = (question) => {
  const [firstNum, operator, secondNum] = question;
  const [op1, op2] = [firstNum, secondNum];
  switch (operator) {
    case '+':
      return op1 + op1;
    case '-':
      return op1 - op2;
    default:
      return op1 * op2;
  }
};

const getQuestion = () => {
  const first = game.getRandomInt(1, 20);
  const second = game.getRandomInt(1, 20);
  const oper = game.getRandomElement(['+', '-', '*']);
  return [first, oper, second];
};

const calcStart = () => {
  const name = game.getName();
  console.log('What is the result of the expression?');
  console.log(game.gameCycle(name, getCorrectAnswer, getQuestion));
};

export default calcStart;
