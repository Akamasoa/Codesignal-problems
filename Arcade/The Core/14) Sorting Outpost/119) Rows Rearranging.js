/*
Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

Example

For

matrix = [[2, 7, 1], 
          [0, 2, 0], 
          [1, 3, 1]]
the output should be
solution(matrix) = false;

For

matrix = [[6, 4], 
          [2, 2], 
          [4, 3]]
the output should be
solution(matrix) = true.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

A 2-dimensional array of integers.

Guaranteed constraints:
1 ≤ matrix.length ≤ 10,
1 ≤ matrix[0].length ≤ 10,
-300 ≤ matrix[i][j] ≤ 300.

[output] boolean

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(matrix) {
let isPosible = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i != j) {
        isPosible =
          isPosible &&
          (matrix[i].every((el, id) => el > matrix[j][id]) ||
            matrix[i].every((el, id) => el < matrix[j][id]));
      }
    }
  }
  return isPosible;
}
