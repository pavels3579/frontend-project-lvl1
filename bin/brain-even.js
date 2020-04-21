#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/get-name.js';

const name = `${getName()}`;
const count = 3;
const question = 'Question: ';
const correct = 'Correct!';
const congradulations = `Congradulations, ${name}!`;
const tryAgain = `Let's try again, ${name}!`;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isWinner = true;
let correctAnswer = 'yes';

for (let i = 0; i < count; i += 1) {
  const randomDigit = Math.floor(Math.random() * 10) + 1;
  console.log(`${question}`, randomDigit.toString());
  const answer = readlineSync.question('Your answer: ');

  if (randomDigit % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (answer === correctAnswer) {
    console.log(correct);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    isWinner = false;
    break;
  }
}

if (isWinner) {
  console.log(congradulations);
} else {
  console.log(tryAgain);
}
