export default (firstNumber, secondNumber) => {
  let min;

  if (firstNumber < secondNumber) {
    min = firstNumber;
  } else {
    min = secondNumber;
  }
  return min;
};
