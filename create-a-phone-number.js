// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  let joined = numbers.join("");

  let areaCode = joined.substring(0, 3);
  let start = joined.substring(3, 6);
  let end = joined.substring(6, 10);

  return `(${areaCode}) ${start}-${end}`;
}
