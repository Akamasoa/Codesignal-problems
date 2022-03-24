/*
Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be createArray(size) = [1, 1, 1, 1].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer.

Guaranteed constraints:
1≤size≤1000.

[output] array.integer

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

function solution(size) {
    let arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(1);
    }
    return arr;
}
