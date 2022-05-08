/*
Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth’ positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.
It is also guaranteed that the total length of two strings is smaller than 32.
Note, that the combs can not be rotated/reversed.

Example

For comb1 = "_.._" and comb2 = "_._", the output should be combs(comb1, comb2) = 5.

Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.



Input/Output

[execution time limit] 4 seconds (js)

[input] string comb1

A comb is represented as a string. If there is an asterisk ('\*') in the ith position, there is a tooth there. Otherwise there is a dot ('.'), which means there is a missing tooth on the comb.

Guaranteed constraints:
3 ≤ comb1.length ≤ 8.

[input] string comb2

The second comb is represented in the same way as the first one.

Guaranteed constraints:
1 ≤ comb2.length ≤ 5.

[output] integer

The minimum length of a purse Miss X needs.
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

function combs(comb1, comb2) {
  let binStr1 = comb1
    .replace(new RegExp("[*]", "g"), "1")
    .replace(new RegExp("[.]", "g"), "0");
  let binStr2 = comb2
    .replace(new RegExp("[*]", "g"), "1")
    .replace(new RegExp("[.]", "g"), "0");
  let offset1 = binStr2.length;
  let lengthStrs = binStr1.length + binStr2.length;
  let min = lengthStrs;
  let tmin;
  let bin1 = parseInt(binStr1, 2) << offset1;
  let bin2 = parseInt(binStr2, 2);
  for (let i = 0; i < lengthStrs; i++) {
    tmin = Math.max(i + binStr2.length, lengthStrs) - Math.min(i, offset1);
    if (!(bin1 & (bin2 << i)) && tmin < min) {
      min = tmin;
    }
  }
  return min;
}
