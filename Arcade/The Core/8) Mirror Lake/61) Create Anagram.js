/*
You are given two strings s and t of the same length, consisting of uppercase English letters. Your task is to find the minimum number of “replacement operations” needed to get some anagram (a string x is an anagram of a string y if one can get y by rearranging the letters of x. For example, the strings "MITE" and "TIME" are anagrams, so are "BABA" and "AABB", but "ABBAC" and "CAABA" are not) of the string t from the string s. A replacement operation is performed by picking exactly one character from the string s and replacing it by some other character.

Example

For s = "AABAA" and t = "BBAAA", the output should be createAnagram(s, t) = 1;

For s = "OVGHK" and t = "RPGUC", the output should be createAnagram(s, t) = 4.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

Guaranteed constraints:
5 ≤ s.length ≤ 35.

[input] string t

Guaranteed constraints:
t.length = s.length.

[output] integer

The minimum number of replacement operations needed to get an anagram of the string t from the string s.
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

function createAnagram(s, t) {
  s = s.split("");
  let pos;
  for (let i = 0; i < t.length; i++) {
    pos = s.indexOf(t[i]);
    if (pos >= 0) {
      s.splice(pos, 1);
    }
  }
  return s.length;
}
