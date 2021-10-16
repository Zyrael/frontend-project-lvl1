import start, * as game from '../src/index.js';

const rulesMessage = 'What is the result of the expression?';

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
  const question = [first, oper, second];
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const calc = () => {
  console.log(start(rulesMessage, getQuestion));
};

export default calc;
