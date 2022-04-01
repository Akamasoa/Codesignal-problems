/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
solution(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
solution(n) = 0.

There are no ways to represent n = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 104.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(n) {
let r = 0;
  for (let i = 2; i < n / 2; i++) {
    if (i % 2) {
      if (Math.round(n / i) * i == n && n / i > i / 2)
        r++;
    } else {
      if (Math.floor(n / i) * i != n && (Math.floor(n / i) + Math.ceil(n / i)) == n * 2 / i && n / i > i / 2)
        r++;
    }
  }
  return r;
}
