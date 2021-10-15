import * as game from '../src/index.js';

const operatorsList = ['+', '-', '*'];

const getCorrectAnswer = (question) => {
  const [firstNum, operator, secondNum] = question.split(' ');
  const [op1, op2] = [Number(firstNum), Number(secondNum)];
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
  const operator = game.getRandomElement(operatorsList);
  const firstNum = game.getRandomInt(1, 20);
  const secondNum = game.getRandomInt(1, 20);
  return `${firstNum} ${operator} ${secondNum}`;
};

const calcStart = () => {
  const name = game.getName();
  console.log('What is the result of the expression?');
  console.log(game.gameCycle(name, getCorrectAnswer, getQuestion));
};

export default calcStart;
