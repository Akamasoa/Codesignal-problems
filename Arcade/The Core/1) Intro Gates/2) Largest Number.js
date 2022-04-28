/*
Given an integer , return the largest number that contains exactly digits.nn

Example

For , the output should be
.n = 2solution(n) = 99

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
.1 ≤ n ≤ 9

[output] integer

The largest integer of length .n

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function largestNumber(n) {
	return Number(Array(n).fill(9).join(''))
}
