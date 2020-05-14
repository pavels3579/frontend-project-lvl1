import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const rule = 'What number is missing in the progression?';

const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const elements = [];
  let number;

  for (let e = 0; e < progressionLength; e += 1) {
    number = firstNumber + e * progressionStep;
    elements.push(number);
  }

  return elements;
};

const playBrainProgression = () => {
  const tasks = [];
  const progressionLength = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(0, 10);
    const progressionStep = getRandomNumber(1, 10);
    const missingElementNumber = getRandomNumber(0, progressionLength - 1);

    const progressionNumbers = getProgression(firstNumber, progressionStep, progressionLength);
    const correctAnswer = progressionNumbers[missingElementNumber];
    progressionNumbers[missingElementNumber] = '..';
    const task = progressionNumbers.join(' ');
    tasks.push([task, correctAnswer.toString()]);
  }

  play(rule, tasks);
};

export default playBrainProgression;
