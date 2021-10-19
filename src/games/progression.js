import start, * as game from '../index.js';

const rulesMessage = 'What number is missing in the progression?';

const getQuestion = () => {
  let elem = game.getRandomInt(0, 20);
  const question = [elem];
  const step = game.getRandomInt(2, 5);

  for (let i = 0; i < game.getRandomInt(5, 10); i += 1) {
    elem += step;
    question.push(elem);
  }

  const correctAnswer = game.getRandomElement(question);
  question[question.indexOf(correctAnswer)] = '..';

  return [question.join(' '), `${correctAnswer}`];
};

const progression = () => {
  start(rulesMessage, getQuestion);
};

export default progression;
