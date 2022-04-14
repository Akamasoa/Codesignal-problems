/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]]

the output should be differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.
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

function differentSquares(matrix) {
  let acc = {};
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      var square = matrix.slice(i, i + 2).map(r => r.slice(j, j + 2));
      acc[square[0].join("") + square[1].join("")] = 1;
    }
  }
  let ret = 0;
  for (let f in acc) {
    ret += acc[f];
  }
  return ret;
}
