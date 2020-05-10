import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = () => {
  const rule = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(0, 100);

    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';

    const task = number.toString();
    tasks.push([task, correctAnswer]);
  }

  play(rule, tasks);
};

export default playBrainPrime;
