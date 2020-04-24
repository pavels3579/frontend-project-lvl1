#!/usr/bin/env node
import { getRoundsCount, main } from '../src/index.js';

const playBrainGcd = () => {
  const roundsCount = getRoundsCount();

  const rule = 'Find the greatest common divisor of given numbers.';

  let correctAnswer;
  const coll = [];
  let min;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstElement = Math.floor(Math.random() * 10) + 1;
    const secondElement = Math.floor(Math.random() * 10) + 1;
    correctAnswer = 1;

    if (firstElement < secondElement) {
      min = firstElement;
    } else {
      min = secondElement;
    }

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
