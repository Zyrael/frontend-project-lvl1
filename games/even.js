import start, * as game from '../src/index.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (question) => (question[0] % 2 === 0 ? 'yes' : 'no');

const getQuestion = () => {
  const question = [game.getRandomInt(1, 50)];
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const even = () => {
  console.log(start(rulesMessage, getQuestion));
};

export default even;
