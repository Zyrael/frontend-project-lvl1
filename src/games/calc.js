import start from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getRandomElement from '../getRandomElement.js';

const rulesMessage = 'What is the result of the expression?';

const getCorrectAnswer = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};

const getQuestion = () => {
  const firstNum = getRandomNumber(1, 20);
  const secondNum = getRandomNumber(1, 20);
  const operator = getRandomElement(['+', '-', '*']);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = `${getCorrectAnswer(firstNum, operator, secondNum)}`;

  return [question, correctAnswer];
};

const calc = () => {
  start(rulesMessage, getQuestion);
};

export default calc;
