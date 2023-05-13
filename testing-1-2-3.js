// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//PARAMETERS: an array of varying length of strings
//RETURNS: an array of strings in numbered order 
//EXAMPLES: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//PSUEDOCODE: iterate over array value and prepend the line number starting with 1 =, and add a colon and space between number and value


var number = function (array) {
  return array.map((e, i) => `${i + 1}: ${e}`);
};