#!/usr/bin/env node
import { getRoundsCount, main } from '../src/index.js';

const playBrainEven = () => {
  const roundsCount = getRoundsCount();

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const randomDigit = Math.floor(Math.random() * 10) + 1;

    if (randomDigit % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const task = randomDigit.toString();
    coll.push([task, correctAnswer]);
  }

  main(rule, coll);
};

export default playBrainEven
