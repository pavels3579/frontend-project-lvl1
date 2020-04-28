import readlineSync from 'readline-sync';
import welcome from './welcome.js';
import getName from './get-name.js';

const RoundsCount = 3;

const getRoundsCount = () => RoundsCount;

const main = (rule, coll) => {
  const name = `${getName()}`;
  const question = 'Question: ';
  const correct = 'Correct!';
  const congradulations = `Congradulations, ${name}!`;
  const tryAgain = `Let's try again, ${name}!`;

  let isWinner = true;

  welcome();
  console.log(rule);

  for (let i = 0; i < coll.length; i += 1) {
    const task = coll[i][0];
    const correctAnswer = coll[i][1];

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

export { getRoundsCount, main };
