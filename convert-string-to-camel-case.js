// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
  let replaced = str.replace(/[-_]/g, " ");
  let split = replaced.split(" ");
  let result = split[0];

  for (let i = 1; i < split.length; i++) {
    result += split[i][0].toUpperCase() + split[i].slice(1);
  }
  return result;
}