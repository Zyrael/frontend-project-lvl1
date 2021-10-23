import { start, getRandomInt } from '../index.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return findGcd(b, a % b);
};

const getCorrectAnswer = (question) => {
  const [a, b] = question;

  return findGcd(a, b);
};

const getQuestion = () => {
  const question = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const correctAnswer = `${getCorrectAnswer(question)}`;

  return [question.join(' '), correctAnswer];
};

const gcd = () => {
  start(rulesMessage, getQuestion);
};

export default gcd;
