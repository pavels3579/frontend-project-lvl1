import readlineSync from 'readline-sync';
import getName from './get-name.js';

const roundsCount = 3;

const main = (rule, coll) => {
  const name = `${getName()}`;
  let isWinner = true;

  console.log('Welcome to the Brain Games!!!');
  console.log(rule);

  for (let i = 0; i < coll.length; i += 1) {
    const [task, correctAnswer] = coll[i];

    console.log('Question: ', task);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      isWinner = false;
      break;
    }
  }

  const result = isWinner ? `Congradulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(result);
};

export { roundsCount, main };
