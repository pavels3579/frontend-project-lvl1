#!/usr/bin/env node
import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const elements = [];
  let number;

  for (let e = 0; e <= progressionLength - 1; e += 1) {
    number = firstNumber + e * progressionStep;
    elements.push(number);
  }

  return elements;
};

const playBrainProgression = () => {
  const rule = 'What number is missing in the progression?';
  const tasks = [];
  const progressionLength = 10;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(10);
    const progressionStep = getRandomNumber(10) + 1;
    const numberMissingElement = getRandomNumber(progressionLength - 1);

    const progressionNumbers = getProgression(firstNumber, progressionStep, progressionLength);
    const correctAnswer = progressionNumbers[numberMissingElement];
    progressionNumbers[numberMissingElement] = '..';
    const task = progressionNumbers.join(' ');
    tasks.push([task, correctAnswer.toString()]);
  }

  play(rule, tasks);
};

export default playBrainProgression;
