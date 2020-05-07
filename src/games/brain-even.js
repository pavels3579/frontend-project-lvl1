import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const playBrainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, 10);

    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    const task = randomNumber.toString();
    tasks.push([task, correctAnswer]);
  }

  play(rule, tasks);
};

export default playBrainEven;
