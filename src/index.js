import readlineSync from 'readline-sync';

const roundsCount = 3;

const play = (rule, tasks) => {
  const name = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!!!');
  console.log(rule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [task, correctAnswer] = tasks[i];

    console.log('Question: ', task);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congradulations, ${name}!`);
};

export { roundsCount, play };
