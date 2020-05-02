#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

const playBrainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(10);

    correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    const task = randomNumber.toString();
    coll.push([task, correctAnswer]);
  }

  main(rule, coll);
};

export default playBrainEven;
