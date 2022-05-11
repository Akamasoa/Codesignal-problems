/*
Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn’t). Call the length of the line the text width.

Given a string and some integers l and r (l ≤ r), check if it’s possible to obtain a beautiful text from the string with a text width that’s within the range [l, r].

Where:

A string that appears within another string. In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.

Examples:

cat is a substring of scatter rest is a substring of arrest implied is not a substring of simplified because there are other characters in between happy is not a substring of happiest because they contain different characters

Example

For inputString = "Look at this example of a correct text", l = 5, and r = 15, the output should be beautifulText(inputString, l, r) = true.

We can replace 13th and 26th characters with '\n', and obtain the following multiline text of width 12: Look at this
example of a
correct text

For inputString = "abc def ghi", l = 4, and r = 10, the output should be beautifulText(inputString, l, r) = false.

There are two ways to obtain a text with lines of equal length from this input, one has width = 3 and another has width = 11 (this is a one-liner). Both of these values are not within our bounds.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
10 ≤ inputString.length ≤ 40.

[input] integer l

A positive integer.

Guaranteed constraints:
1 ≤ l ≤ r.

[input] integer r

A positive integer.

Guaranteed constraints:
1 ≤ r ≤ 15.

[output] boolean

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

function beautifulText(inputString, l, r) {
  let copy;
  let beautiful;
  let beauLen = [];
  if (inputString.length < l) {
    return false;
  } else if (inputString.length <= r) {
    return true;
  }
  while (l <= r) {
    let row = 0;
    beautiful = [[]];
    copy = inputString.split(" ");
    beauLen = Array(copy.length).fill(0);
    while (beauLen[row] < l) {
      beautiful[row].push(copy.shift());
      beauLen[row] =
        beautiful[row].reduce((a, b) => a + b.length, 0) +
        (beautiful[0].length - 1);
    }
    l = beauLen[0] + 1;
    if (beauLen[0] > r) {
      return false;
    }
    while (copy.length) {
      row++;
      beautiful[row] = [];
      while (copy.length && beauLen[row] < beauLen[row - 1]) {
        beautiful[row].push(copy.shift());
        beauLen[row] =
          beautiful[row].reduce((a, b) => a + b.length, 0) +
          (beautiful[row].length - 1);
      }
      if (beauLen[row] > beauLen[row - 1]) {
        break;
      }
    }
    if (copy.length === 0 && beauLen[row] === beauLen[row - 1]) {
      return true;
    }
  }
  return false;
}
