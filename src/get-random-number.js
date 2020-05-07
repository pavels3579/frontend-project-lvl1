export default (lowerRange, upperRange) => {
  const number = Math.round(Math.random() * upperRange);

  return Math.max(lowerRange, number);
};
