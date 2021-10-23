import { start, getRandomInt, getRandomElement } from '../index.js';

const rulesMessage = 'What is the result of the expression?';

const getCorrectAnswer = (question) => {
  const [firstNum, operator, secondNum] = question;

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
  const firstNum = getRandomInt(1, 20);
  const secondNum = getRandomInt(1, 20);
  const operator = getRandomElement(['+', '-', '*']);
  const question = [firstNum, operator, secondNum];
  const correctAnswer = `${getCorrectAnswer(question)}`;

  return [question.join(' '), correctAnswer];
};

const calc = () => {
  start(rulesMessage, getQuestion);
};

export default calc;
