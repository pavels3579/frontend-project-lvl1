#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

const playBrainCalc = () => {
  const rule = 'What is the result of the expression?';
  let correctAnswer;
  const coll = [];
  const signs = ['+', '-', '*'];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);
    const sign = signs[Math.floor(Math.random() * signs.length)];

    switch (sign) {
      case '+':
        correctAnswer = firstNumber + secondNumber;
        break;
      case '-':
        correctAnswer = firstNumber - secondNumber;
        break;
      default:
        correctAnswer = firstNumber * secondNumber;
    }

    const task = `${firstNumber.toString()} ${sign} ${secondNumber.toString()} `;
    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainCalc;
