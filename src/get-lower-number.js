export default (firstElement, secondElement) => {
  let min;

  if (firstElement < secondElement) {
    min = firstElement;
  } else {
    min = secondElement;
  }
  return min;
};
