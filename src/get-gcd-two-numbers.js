import getLowerNumber from './get-lower-number.js';

export default (firstNumber, secondNumber) => {
  const min = getLowerNumber(firstNumber, secondNumber);

  let result = 1;

  for (let i = 1; i <= min; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};
