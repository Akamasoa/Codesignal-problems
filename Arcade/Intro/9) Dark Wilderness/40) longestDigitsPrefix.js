/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
solution(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(inputString) {
 let i = 0;
    while (inputString[i] >= '0' && inputString[i] <= '9') {
        i++;
    }
    return inputString.substring(0, i);
}
