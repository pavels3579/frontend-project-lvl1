#!/usr/bin/env node
import { roundsCount, main } from '../src/index.js';
import getRandomNumber from '../src/get-random-number.js';
import getProgression from '../src/get-progression.js';

const playBrainProgression = () => {
  const rule = 'What number is missing in the progression?';
  let correctAnswer;
  const coll = [];
  const progressionLength = 10;

  let task;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(10);
    const progressionStep = getRandomNumber(10) + 1;
    const numberMissingElement = getRandomNumber(progressionLength - 1);

    const progressionNumbers = getProgression(firstNumber, progressionStep, progressionLength);
    correctAnswer = progressionNumbers[numberMissingElement];
    progressionNumbers[numberMissingElement] = '..';
    task = progressionNumbers.join(' ');
    coll.push([task, correctAnswer.toString()]);
  }

  main(rule, coll);
};

export default playBrainProgression;
