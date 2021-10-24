/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function palindromeRearranging(inputString) {
let palindrome = true;
    let center = 0;
    let array = inputString.split("");
    while (palindrome&&array.length>0){
        if (array.indexOf(array[0],1)>0)
            array.splice(array.indexOf(array[0],1),1);
        else
            if (center<1)
                center++;
            else 
                palindrome = false;
        array = array.slice(1);
        
    }
    return palindrome;
}
