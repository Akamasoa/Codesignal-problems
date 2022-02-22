/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
solution(cell) = 2.



For cell = "c2", the output should be
solution(cell) = 6.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(cell) {
cell = cell.split('');
    cell[0] = cell[0].charCodeAt(0) - 'a'.charCodeAt(0) +1;
    cell[1] = Number(cell[1]);
    aux = [[1,1], [1,1],[1,1],[1,1]]
    let horse = 8;
    if(cell[0] < 3){
        horse -= aux[0][0];
        horse -= aux[0][1];
        aux[0][0] = 0;
        aux[0][1] = 0;
    }
    if(cell[0] < 2) {
        horse -= aux[1][0];
        horse -= aux[1][1];
        aux[1][0] = 0;
        aux[1][1] = 0;
    }
    if(cell[0] > 6){
        horse -= aux[3][0];
        horse -= aux[3][1];
        aux[3][0] = 0;
        aux[3][1] = 0;
    }
    if(cell[0] > 7){
        horse -= aux[2][0];
        horse -= aux[2][1];
        aux[2][0] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 3){
        horse -= aux[1][1];
        horse -= aux[2][1];
        aux[1][1] = 0;
        aux[2][1] = 0;
    }
    if(cell[1] < 2){
        horse -= aux[0][1];
        horse -= aux[3][1];
        aux[0][1] = 0;
        aux[3][1] = 0;
    }
    if(cell[1] > 6){
        horse -= aux[1][0];
        horse -= aux[2][0];
        aux[1][0] = 0;
        aux[2][0] = 0;
    }
    if(cell[1] > 7){
        horse -= aux[0][0];
        horse -= aux[3][0];
        aux[0][0] = 0;
        aux[3][0] = 0;
    }
    
    return horse;
}
