import { roundsCount, play } from '../index.js';
import getRandomNumber from '../get-random-number.js';

const playBrainCalc = () => {
  const rule = 'What is the result of the expression?';
  const tasks = [];
  const signs = ['+', '-', '*'];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(0, 10);
    const secondNumber = getRandomNumber(0, 10);
    const sign = signs[Math.floor(Math.random() * signs.length)];
    let correctAnswer;

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
    tasks.push([task, correctAnswer.toString()]);
  }

  play(rule, tasks);
};

export default playBrainCalc;
