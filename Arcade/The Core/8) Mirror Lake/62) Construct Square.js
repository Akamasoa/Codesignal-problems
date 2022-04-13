/*
Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string’s characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.

Example

For s = "ab", the output should be constructSquare(s) = 81. The largest 2-digit square number with different digits is 81.
For s = "zzz", the output should be constructSquare(s) = -1. There are no 3-digit square numbers with identical digits.
For s = "aba", the output should be constructSquare(s) = 900. It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
1 ≤ s.length < 10.

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

