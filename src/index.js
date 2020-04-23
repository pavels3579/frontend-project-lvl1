import readlineSync from 'readline-sync';
import getName from '../src/get-name.js';

const RoundsCount = 3;

const getRoundsCount = () => {
  return RoundsCount;
};

const main = (rule, coll) => {
  const name = `${getName()}`;

  const question = 'Question: ';
  const correct = 'Correct!';
  const congradulations = `Congradulations, ${name}!`;
  const tryAgain = `Let's try again, ${name}!`;

  let isWinner = true;

  console.log(rule);

  for (const item of coll) {
    const task = item[0];
    const correctAnswer = item[1];

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
