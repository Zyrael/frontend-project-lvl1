import { start, getRandomInt } from '../index.js';

const rulesMessage = 'What number is missing in the progression?';

const getQuestion = () => {
  const question = [];
  const len = getRandomInt(5, 10);
  const first = getRandomInt(0, 20);
  const step = getRandomInt(2, 5);
  const indexOfHidden = getRandomInt(0, len - 1);
  let correctAnswer = 0;

  for (let i = 0; i < len; i += 1) {
    if (i === indexOfHidden) {
      question.push('..');
      correctAnswer = `${first + i * step}`;
    } else {
      question.push(first + i * step);
    }
  }

  return [question.join(' '), correctAnswer];
};

const progression = () => {
  start(rulesMessage, getQuestion);
};

export default progression;
