// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.



function noOdds(values) {
  const newArr = values.filter((n) => n % 2 === 0);

  return newArr;
}
