// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  if (arr.some((e) => typeof e !== "number")) {
    return undefined;
  }

  let oddFiltered = arr.filter((e) => e % 2 !== 0);

  return oddFiltered.reduce((a, c) => a + c * c * c, 0);
}