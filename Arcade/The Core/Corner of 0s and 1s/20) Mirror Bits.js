/*
Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
solution(a) = 1.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer a

Guaranteed constraints:
5 ≤ a ≤ 105.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(a) {
let ret = 0;
  let m = Math.floor(Math.log2(a));
  let i = m + 1;
  while (i--) {
    ret = ret | (((a & (1 << i)) >> i) << (m - i));
  }
  return ret;
}
