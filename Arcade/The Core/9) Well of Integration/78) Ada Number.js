/*
Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.

Example

For line = "123_456_789", the output should be adaNumber(line) = true;
For line = "16#123abc#", the output should be adaNumber(line) = true;
For line = "10#123abc#", the output should be adaNumber(line) = false;
For line = "10#10#123ABC#", the output should be adaNumber(line) = false;
For line = "10#0#", the output should be adaNumber(line) = true;
For line = "10##", the output should be adaNumber(line) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string line

A non-empty string.

Guaranteed constraints:
2 ≤ line.length ≤ 30.

[output] boolean

true if line is a valid integer representation, false otherwise.
[JavaScript (ES6)] Syntax Tips

1
2
3
4
5
6
// Prints help message to the console
// Returns a string
function helloWorld(name) {
console.log("This prints to the console when you Run Tests");
return "Hello, " + name;
}
*/

function adaNumber(line) {
  let parsed = line.toLowerCase().replace(new RegExp('_', 'g'), '').split('#');
  let isValid = parsed.length === 1 || parsed.length === 3;
  let base;
  let number;
  if (parsed.length === 1) {
    base = 10;
    number = parsed[0];
  } else {
    [base, number] = parsed;
  }
  base = Number(base);
  isValid = isValid && base >= 2 && base <= 16;
  return isValid && number.length && number.split('').every(digit => digit === parseInt(digit, base).toString(base));
}
