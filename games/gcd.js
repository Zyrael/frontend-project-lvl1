import start, * as game from '../src/index.js';

const rulesMessage = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => [game.getRandomInt(1, 100), game.getRandomInt(1, 100)];

const getCorrectAnswer = (question) => {
  let [min, max] = question;
  if (min > max) {
    [min, max] = [max, min];
  }
  if (max % min === 0) {
    return min;
  }

  let correctAnswer = 1;

  for (let i = 2; i < min; i += 1) {
    if ((min % i === 0) && (max % i === 0)) {
      correctAnswer = i;
    }
  }
  return correctAnswer;
};

const gcd = () => {
  console.log(start(rulesMessage, getQuestion, getCorrectAnswer));
};

export default gcd;
