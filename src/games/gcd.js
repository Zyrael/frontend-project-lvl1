import { start, getRandomInt } from '../index.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }

  return getCorrectAnswer(b, a % b);
};

const getQuestion = () => {
  const question = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const correctAnswer = `${getCorrectAnswer(...question)}`;

  return [question.join(' '), correctAnswer];
};

const gcd = () => {
  start(rulesMessage, getQuestion);
};

export default gcd;
