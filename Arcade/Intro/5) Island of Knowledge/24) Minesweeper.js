/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - if the corresponding cell contains a mine, otherwise.truefalse

Guaranteed constraints:
,
.2 ≤ matrix.length ≤ 1002 ≤ matrix[0].length ≤ 100

[output] array.array.integer

Rectangular matrix of the same size as each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.matrix

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function minesweeper(matrix) {
   let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(0);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === true) {
                for (let k = Math.max(0, i - 1); k <= Math.min(i + 1, matrix.length - 1); k++) {
                    for (let l = Math.max(0, j - 1); l <= Math.min(j + 1, matrix[k].length - 1); l++) {
                        if (k !== i || l !== j) {
                            result[k][l]++;
                        }
                    }
                }
            }
        }
    }
    return result;
}
