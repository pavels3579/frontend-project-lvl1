#!/usr/bin/env node
import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const isNumberPrime = (number) => {
  for (let e = 2; e <= number / 2; e += 1) {
    if (number % e === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = () => {
  const rule = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(100) + 2;

    const correctAnswer = (isNumberPrime(number)) ? 'yes' : 'no';

    const task = number.toString();
    tasks.push([task, correctAnswer]);
  }

  play(rule, tasks);
};

export default playBrainPrime;
