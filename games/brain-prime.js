#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import isNumberPrime from '../src/is-number-prime.js';

const playBrainPrime = () => {
  const rule = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(100) + 2;

    correctAnswer = (isNumberPrime(number)) ? 'yes' : 'no';

    const task = number.toString();
    coll.push([task, correctAnswer]);
  }

  main(rule, coll);
};

export default playBrainPrime;
