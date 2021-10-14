import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameCycle = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 50);
    const correctAnswer = getCorrectAnswer(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (!(correctAnswer === answer)) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

const gameStart = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(gameCycle(name));
};

export default gameStart;
