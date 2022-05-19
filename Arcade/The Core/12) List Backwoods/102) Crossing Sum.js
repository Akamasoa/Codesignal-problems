/*
Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.

Example

For


matrix = [[1, 1, 1, 1], 
          [2, 2, 2, 2], 
          [3, 3, 3, 3]]

a = 1, and b = 3, the output should be crossingSum(matrix, a, b) = 12.

Here (2 + 2 + 2 + 2) + (1 + 3) = 12.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

2-dimensional array of integers representing a rectangular matrix.

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[0].length ≤ 500,
1 ≤ matrix[i][j] ≤ 105.

[input] integer a

A non-negative integer less than the number of matrix rows.

Guaranteed constraints:
0 ≤ a < matrix.length.

[input] integer b

A non-negative integer less than the number of matrix columns.

Guaranteed constraints:
0 ≤ b < matrix[i].length.

[output] integer

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

function crossingSum(matrix, a, b) {
  return (
    matrix[a].reduce((c, d) => c + d) +
    matrix.reduce((acc, row) => acc + row[b], 0) -
    matrix[a][b]
  );
}
