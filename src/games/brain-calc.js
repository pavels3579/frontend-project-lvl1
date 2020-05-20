import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const rule = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const playBrainCalc = () => {
  const tasks = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(0, 10);
    const secondNumber = getRandomNumber(0, 10);
    const sign = signs[getRandomNumber(0, signs.length - 1)];
    let correctAnswer;

    switch (sign) {
      case '+':
        correctAnswer = firstNumber + secondNumber;
        break;
      case '-':
        correctAnswer = firstNumber - secondNumber;
        break;
      case '*':
        correctAnswer = firstNumber * secondNumber;
        break;
      default:
    }

    const task = `${firstNumber} ${sign} ${secondNumber}`;
    tasks.push([task, correctAnswer.toString()]);
  }

  play(rule, tasks);
};

export default playBrainCalc;
