#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import getLowerNumber from '../src/get-lower-number.js';

const playBrainGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  let correctAnswer;
  const coll = [];
  let min;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstElement = getRandomNumber(10);
    const secondElement = getRandomNumber(10);
    correctAnswer = 1;

    min = getLowerNumber(firstElement, secondElement);

    for (let e = 1; e <= min; e += 1) {
      if (firstElement % e === 0 && secondElement % e === 0) {
        correctAnswer = e;
      }
    }

    const task = `${firstElement.toString()} ${secondElement.toString()} `;
    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainGcd;
