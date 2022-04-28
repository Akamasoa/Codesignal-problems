/*
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, …, n turns into m, m turns into n, …, z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example

For inputString = "name", the output should be reflectString(inputString) = "mznv".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string of lowercase characters.

Guaranteed constraints:
3 ≤ inputString.length ≤ 1000.

[output] string

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

function reflectString(inputString) {
  return inputString.split('').map(c => String.fromCharCode('z'.charCodeAt(0) - c.charCodeAt(0) + 'a'.charCodeAt(0))).join('');
}
