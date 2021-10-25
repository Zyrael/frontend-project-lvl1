import { start, getRandomInt } from '../index.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }

  return getCorrectAnswer(b, a % b);
};

const getQuestion = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = `${getCorrectAnswer(firstNum, secondNum)}`;

  return [question, correctAnswer];
};

const gcd = () => {
  start(rulesMessage, getQuestion);
};

export default gcd;
