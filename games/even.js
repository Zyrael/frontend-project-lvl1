import start, * as game from '../src/index.js';

const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => [game.getRandomInt(1, 50)];

const getCorrectAnswer = (question) => {
  if (question[0] % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  console.log(start(rulesMessage, getQuestion, getCorrectAnswer));
};

export default even;
