import start from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rulesMessage = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const question = [];
  const len = getRandomNumber(5, 10);
  const first = getRandomNumber(0, 20);
  const step = getRandomNumber(2, 5);
  const indexOfHidden = getRandomNumber(0, len - 1);
  const correctAnswer = `${first + indexOfHidden * step}`;

  for (let i = 0; i < len; i += 1) {
    question.push((i === indexOfHidden) ? '..' : (first + i * step));
  }

  return [question.join(' '), correctAnswer];
};

const progression = () => {
  start(rulesMessage, getQuestionAndAnswer);
};

export default progression;
