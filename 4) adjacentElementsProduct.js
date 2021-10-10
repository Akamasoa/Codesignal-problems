/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For , the output should be
.inputArray = [3, 6, -2, -5, 7, 3]adjacentElementsProduct(inputArray) = 21

7 and produce the largest product.3

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
,
.2 ≤ inputArray.length ≤ 10-1000 ≤ inputArray[i] ≤ 1000

[output] integer

The largest product of adjacent elements.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function  adjacentElementsProduct(inputArray) {
    if (inputArray.length == 1) return 0;
    var maxProduct = inputArray[0] * inputArray[1];   
    for(let i = 1; i < inputArray.length - 1; i++) {
        maxProduct = Math.max(maxProduct, inputArray[i] * inputArray[i+1]);
        }
    return maxProduct;
}
