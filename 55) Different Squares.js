/*
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
solution(matrix) = 6.

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

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(matrix) {
    let d = [];
    for(let i = 1;  i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if(not(i,j)){
                d.push([
                    [
                        matrix[i-1][j-1],
                        matrix[i-1][j]
                    ],[
                        matrix[i][j-1],
                        matrix[i][j]
                    ]
                ]);
            }
        }
    }
    
    function not(i, j) {
        return d.every(c=>{
           return c[0][0] !== matrix[i-1][j-1] ||
               c[0][1] !== matrix[i-1][j] || 
               c[1][0] !== matrix[i][j-1] ||
               c[1][1] !== matrix[i][j]
        });
    }
    return d.length;
}
