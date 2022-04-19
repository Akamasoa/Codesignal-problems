/*
Check whether the given string is a subsequence of the plaintext alphabet, given the following definitions:

subsequence: A is considered a subsequence of B if every element from A appears in B in the same order (not necessarily contiguous; there can be other elements in between). In other words, A can be obtained just by deleting elements from B.

Examples:

[3, 7] is a subsequence of [2, 3, 7]
[0, 0] is a subsequence of [9, 0, 2, 1, 0]
[1, 2, 3] is a subsequence of [1, 2, 3]
[8, 7] is not a subsequence of [7, 8] because the elements don’t appear in the same order
[1, 1] is not a subsequence of [1, 2, 3] because it contains different elements
plaintext: The plaintext alphabet is a string “abcdef…xyz”.

Example

For s = "effg", the output should be alphabetSubsequence(s) = false;
For s = "cdce", the output should be alphabetSubsequence(s) = false;
For s = "ace", the output should be alphabetSubsequence(s) = true;
For s = "bxz", the output should be alphabetSubsequence(s) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
2 ≤ s.length ≤ 15.

[output] boolean

true if the given string is a subsequence of the alphabet, false otherwise.
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

