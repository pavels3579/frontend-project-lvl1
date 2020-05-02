#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';

const playBrainProgression = () => {
  const rule = 'What number is missing in the progression?';
  let correctAnswer;
  const coll = [];
  const progressionLength = 10;

  let task;

  for (let i = 0; i < roundsCount; i += 1) {
    task = '';
    const firstNumber = getRandomNumber(10);
    const progressionStep = getRandomNumber(10) + 1;
    const numberMissingElement = getRandomNumber(progressionLength);
    let number;

    for (let e = 0; e <= progressionLength - 1; e += 1) {
      number = firstNumber + e * progressionStep;

      if (e !== numberMissingElement) {
        task += `${number.toString()} `;
      } else {
        correctAnswer = number;
        task += '.. ';
      }
    }

    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainProgression;
