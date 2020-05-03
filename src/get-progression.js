export default (firstNumber, progressionStep, progressionLength) => {
  const coll = [];
  let number;

  for (let e = 0; e <= progressionLength - 1; e += 1) {
    number = firstNumber + e * progressionStep;
    coll.push(number);
  }

  return coll;
};
