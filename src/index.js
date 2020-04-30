import readlineSync from 'readline-sync';
import getName from './get-name.js';

const roundsCount = 3;

const main = (rule, coll) => {
  const name = `${getName()}`;
  const question = 'Question: ';
  const correct = 'Correct!';
  const congradulations = `Congradulations, ${name}!`;
  const tryAgain = `Let's try again, ${name}!`;

  let isWinner = true;

  console.log('Welcome to the Brain Games!!!');
  console.log(rule);

  for (let i = 0; i < coll.length; i += 1) {
    const [task, correctAnswer] = coll[i];

    console.log(`${question}`, task);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log(correct);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      isWinner = false;
      break;
    }
  }

  if (isWinner) {
    console.log(congradulations);
  } else {
    console.log(tryAgain);
  }
};

export { roundsCount, main };
