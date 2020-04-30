#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

const playBrainPrime = () => {
  const rule = 'Answer "yes" if the number is prime. Otherwise answer "no".';

  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const element = getRandomNumber(100) + 2;

    correctAnswer = 'yes';

    for (let e = 2; e <= element / 2; e += 1) {
      if (element % e === 0) {
        correctAnswer = 'no';
        break;
      }
    }

    const task = element.toString();
    coll.push([task, correctAnswer]);
  }

  main(rule, coll);
};

export default playBrainPrime;
