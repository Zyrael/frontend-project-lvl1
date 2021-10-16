import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const start = (rulesMessage, getQuestion, getCorrectAnswer) => {
  const name = getName();
  console.log(rulesMessage);
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(`Question: ${question.join(' ')} `);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) !== String(correctAnswer)) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default start;
