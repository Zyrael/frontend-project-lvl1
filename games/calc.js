import start, * as game from '../src/index.js';

const rulesMessage = 'What is the result of the expression?';

const getCorrectAnswer = (question) => {
  const [firstNum, operator, secondNum] = question;
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
};

const getQuestion = () => {
  const firstNum = game.getRandomInt(1, 20);
  const secondNum = game.getRandomInt(1, 20);
  const operator = game.getRandomElement(['+', '-', '*']);
  const question = [firstNum, operator, secondNum];
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const calc = () => {
  console.log(start(rulesMessage, getQuestion));
};

export default calc;
