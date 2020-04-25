#!/usr/bin/env node
import { getRoundsCount, main } from '../src/index.js';

const playBrainProgression = () => {
  const roundsCount = getRoundsCount();

  const rule = 'What number is missing in the progression?';

  let correctAnswer;
  const coll = [];
  const progressionLength = 10;

  let task;

  for (let i = 0; i < roundsCount; i += 1) {
    task = '';
    const firstElement = Math.floor(Math.random() * 10) + 1;
    const progressionStep = Math.floor(Math.random() * 10) + 1;
    const numberMissingElement = Math.floor(Math.random() * 10) + 1;
    let element;

    for (let e = 1; e <= progressionLength; e += 1) {
      element = firstElement + (e - 1) * progressionStep;

      if (e !== numberMissingElement) {
        task += `${element.toString()} `;
      } else {
        correctAnswer = element;
        task += '.. ';
      }
    }

    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainProgression;
