/*
Determine whether the given string can be obtained by one concatenation of some string to itself.

Example

For inputString = "tandemtandem", the output should be isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be isTandemRepeat(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
2 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString represents a string concatenated to itself, false otherwise.
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
Solution
1
2
3
4
5
6
function isTandemRepeat(inputString) {
  var l = inputString.length;
  return (
    l % 2 === 0 && inputString.substr(0, l / 2) === inputString.substr(l / 2)
  );
}
*/

