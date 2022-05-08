/*
Define crossover operation over two equal-length strings A and B as follows:

the result of that operation is a string of the same length as the input strings
result[i] is either A[i] or B[i], chosen at random
Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

Example

For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be stringsCrossover(inputArray, result) = 2.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of equal-length strings.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10,

[input] string result

A string of the same length as each of the inputArray elements.

Guaranteed constraints:
result.length = inputArray[i].length.

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

function stringsCrossover(inputArray, result) {
  let pairs = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (possibleCrossover(inputArray[i], inputArray[j], result)) {
        pairs++;
      }
    }
  }
  return pairs;
}

function possibleCrossover(A, B, result) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== result[i] && B[i] !== result[i]) {
      return false;
    }
  }
  return true;
}
