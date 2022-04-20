/*
Given a rectangular matrix of characters, add a border of asterisks(\*) to it.

Example

For
picture = ["abc",
"ded"]

the output should be

addBorder(picture) = ["*****",
"*abc*",
"*ded*",
"*****"]

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.
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

function addBorder(picture) {
  return [Array(picture[0].length + 2).fill('*').join('')]
    .concat(
      picture.map(r => '*' + r + '*'),
      [Array(picture[0].length + 2).fill('*').join('')]
    )
}
