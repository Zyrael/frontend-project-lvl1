import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameCycle = (name, getCorrectAnswer, getQuestion) => {
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    const answer = readlineSync.question(`Question: ${question} `);
    if (!(String(answer) === String(correctAnswer))) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
