import readlineSync from 'readline-sync';

const roundsAmount = 3;

export default (rulesMessage, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rulesMessage);

  for (let i = 0; i < roundsAmount; i += 1) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question} `);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
