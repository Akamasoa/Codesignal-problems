/*
Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example

For noun = "pARiS", the output should be
solution(noun) = "Paris";
For noun = "John", the output should be
solution(noun) = "John".
Input/Output

[execution time limit] 4 seconds (js)

[input] string noun

A string representing a proper noun with a mix of capital and small English letters.

Guaranteed constraints:
1 ≤ noun.length ≤ 10.

[output] string

Corrected (if needed) noun.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(noun) {
  return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}
