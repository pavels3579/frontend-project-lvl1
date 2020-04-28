#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';

const playBrainCalc = () => {
  const rule = 'What is the result of the expression?';

  let correctAnswer;
  const coll = [];
  const signes = ['+', '-', '*'];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstElement = Math.floor(Math.random() * 10) + 1;
    const secondElement = Math.floor(Math.random() * 10) + 1;
    const sign = signes[Math.floor(Math.random() * signes.length)];

    switch (sign) {
      case '+':
        correctAnswer = firstElement + secondElement;
        break;
      case '-':
        correctAnswer = firstElement - secondElement;
        break;
      default:
        correctAnswer = firstElement * secondElement;
    }

    const task = `${firstElement.toString()} ${sign} ${secondElement.toString()} `;
    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainCalc;
