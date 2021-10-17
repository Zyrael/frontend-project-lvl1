import start, * as game from '../src/index.js';

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
  const question = [game.getRandomInt(1, 100), game.getRandomInt(1, 100)];
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const gcd = () => {
  console.log(start(rulesMessage, getQuestion));
};

export default gcd;