/*
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

Example

For


matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

the output should be


swapDiagonals(matrix) = [[3, 2, 1],
                         [4, 5, 6],
                         [9, 8, 7]]

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
matrix.length = matrix[i].length,
1 ≤ matrix[i][j] ≤ 105.

[output] array.array.integer

Matrix with swapped diagonals.
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

function swapDiagonals(matrix) {
  let reversed = matrix.map((row) => row.slice());
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    reversed[i][i] = matrix[i][n - i - 1];
    reversed[i][n - i - 1] = matrix[i][i];
  }
  return reversed;
}
