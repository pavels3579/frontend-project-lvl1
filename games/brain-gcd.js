#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import getGcdTwoNumbers from '../src/get-gcd-two-numbers.js';

const playBrainGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  let correctAnswer;
  const coll = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(10) + 1;
    const secondNumber = getRandomNumber(10) + 1;
    correctAnswer = getGcdTwoNumbers(firstNumber, secondNumber);

    const task = `${firstNumber.toString()} ${secondNumber.toString()} `;
    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainGcd;
