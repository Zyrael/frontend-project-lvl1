import start, * as game from '../src/index.js';

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
  return [question, correctAnswer];
};

const progression = () => {
  console.log(start(rulesMessage, getQuestion));
};

export default progression;
