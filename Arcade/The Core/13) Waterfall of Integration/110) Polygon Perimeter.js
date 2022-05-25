/*
You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It’s guaranteed that there is at least one black cell on the table.

Example

For


matrix = [[false, true,  true ],
          [true,  true,  false],
          [true,  false, false]]

the output should be


polygonPerimeter(matrix) = 12.



For


matrix = [[true, true,  true],
          [true, false, true],
          [true, true,  true]]

the output should be


polygonPerimeter(matrix) = 16.

</code>



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A matrix of booleans representing the rectangular board where true means a black cell and false means a white one.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

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

function polygonPerimeter(matrix) {
  var adjacents = (i, j) => [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j],
  ];
  var perimeter = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      perimeter +=
        matrix[i][j] &&
        adjacents(i, j).reduce(function (acc, pos) {
          return (
            acc +
            (pos[0] < 0 ||
              pos[1] < 0 ||
              pos[0] == matrix.length ||
              pos[1] === matrix[0].length ||
              !matrix[pos[0]][pos[1]])
          );
        }, 0);
    }
  }
  return perimeter;
}
