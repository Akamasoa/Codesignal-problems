/*
Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

Example

For l = 10 and r = 12, the output should be
solution(l, r) = 2.

Here are all values of s(x) to consider:

s(10) = 1, so 10 is comfortable with 9 and 11;
s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).

Input/Output

[execution time limit] 4 seconds (js)

[input] integer l

Guaranteed constraints:
1 ≤ l ≤ r ≤ 1000.

[input] integer r

Guaranteed constraints:
1 ≤ l ≤ r ≤ 1000.

[output] integer

The number of pairs satisfying all the above conditions.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(l, r) {
function s(x) {
    return String(x).split('').map(Number).reduce((a, b) => a + b);
  }
  let ret = [];
  for (let i = l; i <= r; i++) {
    for (let j = i + 1; j <= Math.min(r, i + s(i)); j++) {
      if (i === j)
        continue;
      if (i >= j - s(j) && i <= j + s(j)) {
        ret.push([i, j]);
      }
    }
  }
  return ret.filter((el, id, arr) => id === arr.findIndex(function (fl) {
    return el[0] === fl[0] && el[1] === fl[1];
  })).length;
}
