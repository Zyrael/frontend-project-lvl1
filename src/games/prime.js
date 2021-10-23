import { start, getRandomInt } from '../index.js';

const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getQuestion = () => {
  const question = getRandomInt(1, 30);
  const correctAnswer = `${getCorrectAnswer(question)}`;

  return [question, correctAnswer];
};

const prime = () => {
  start(rulesMessage, getQuestion);
};

export default prime;
