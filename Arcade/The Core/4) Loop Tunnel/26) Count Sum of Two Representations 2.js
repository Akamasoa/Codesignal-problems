/*
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For n = 6, l = 2, and r = 4, the output should be
solution(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
5 ≤ n ≤ 109.

[input] integer l

A positive integer.

Guaranteed constraints:
1 ≤ l ≤ r.

[input] integer r

A positive integer.

Guaranteed constraints:
l ≤ r ≤ 109,
r - l ≤ 106.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(n, l, r) {
  let count = 0;
    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            if (n === i + j) {
                count++;
            }
        }
    }
    return count;
}

/*
function solution(n, l, r) {
  if (2 * r < n || 2 * l > n) {
      return 0;
  }
  let min = Math.max(l, n - r);
  let max = Math.min(r, n - l);
  let mid = Math.floor((max + min) / 2);
  return mid - min + 1;
}
*/
