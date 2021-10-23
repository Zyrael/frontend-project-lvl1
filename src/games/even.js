import { start, getRandomInt } from '../index.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

const getQuestion = () => {
  const question = getRandomInt(1, 50);
  const correctAnswer = `${getCorrectAnswer(question)}`;

  return [question, correctAnswer];
};

const even = () => {
  start(rulesMessage, getQuestion);
};

export default even;
