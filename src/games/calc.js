import start, * as game from '../index.js';

const rulesMessage = 'What is the result of the expression?';

const getCorrectAnswer = (question) => {
  const [firstNum, operator, secondNum] = question.split(' ');

  switch (operator) {
    case '+':
      return Number(firstNum) + Number(secondNum);
    case '-':
      return Number(firstNum) - Number(secondNum);
    case '*':
      return Number(firstNum) * Number(secondNum);
    default:
      return null;
  }
};

const getQuestion = () => {
  const firstNum = game.getRandomInt(1, 20);
  const secondNum = game.getRandomInt(1, 20);
  const operator = game.getRandomElement(['+', '-', '*']);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = `${getCorrectAnswer(question)}`;

  return [question, correctAnswer];
};

const calc = () => {
  start(rulesMessage, getQuestion);
};

export default calc;
