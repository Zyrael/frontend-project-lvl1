import * as game from '../src/index.js';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestion = () => game.getRandomInt(1, 50);

const evenStart = () => {
  const name = game.getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(game.gameCycle(name, getCorrectAnswer, getQuestion));
};

export default evenStart;
