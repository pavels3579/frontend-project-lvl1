import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getLowerNumber = (firstNumber, secondNumber) => {
  if (firstNumber < secondNumber) {
    return firstNumber;
  }
  return secondNumber;
};

const getGcd = (firstNumber, secondNumber) => {
  const min = getLowerNumber(firstNumber, secondNumber);

  let gcd = 1;

  for (let i = 1; i <= min; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const playBrainGcd = () => {
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const correctAnswer = getGcd(firstNumber, secondNumber);

    const task = `${firstNumber} ${secondNumber} `;
    tasks.push([task, correctAnswer.toString()]);
  }

  play(rule, tasks);
};

export default playBrainGcd;
