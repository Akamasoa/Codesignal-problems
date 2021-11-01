/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate to the right. You are allowed only to make jumps of the same length represented 
by some integer.0

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For , the output should be
.inputArray = [5, 3, 6, 7, 9]avoidObstacles(inputArray) = 4

Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Non-empty array of positive integers.

Guaranteed constraints:
,
.2 ≤ inputArray.length ≤ 10001 ≤ inputArray[i] ≤ 1000

[output] integer

The desired length.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function avoidObstacles(inputArray) {
let i = 1;
    while (true) {
        if (inputArray.every(x => x % i !== 0)) {
            return i;
        }
        i++;
    }
}
