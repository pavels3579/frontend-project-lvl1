#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import isNumberPrime from '../src/is-number-prime.js';

const playBrainPrime = () => {
  const rule = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const element = getRandomNumber(100) + 2;

    correctAnswer = (isNumberPrime(element)) ? 'yes' : 'no';

    const task = element.toString();
    coll.push([task, correctAnswer]);
  }

  main(rule, coll);
};

export default playBrainPrime;
