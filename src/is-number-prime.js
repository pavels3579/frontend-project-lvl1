export default (number) => {
  for (let e = 2; e <= number / 2; e += 1) {
    if (number % e === 0) {
      return false;
    }
  }
  return true;
};
