import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const playBrainEven = () => {
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const task = getRandomNumber(0, 10);

    const correctAnswer = (task % 2 === 0) ? 'yes' : 'no';

    tasks.push([task.toString(), correctAnswer]);
  }

  play(rule, tasks);
};

export default playBrainEven;
