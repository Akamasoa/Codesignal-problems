/*
An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we’ll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual alphabetical order applies.
A number is always considered less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab" "ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x" "x11y012" < "x011y13"

Your task is to return true if s1 is strictly less than s2, and false otherwise.

Example

For s1 = "a" and s2 = "a1", the output should be alphanumericLess(s1, s2) = true;

These strings have equal first tokens, but since s1 has fewer tokens than s2, it’s considered smaller.

For s1 = "ab" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false;

These strings also have equal first tokens, but since numbers are considered less than letters, s1 is larger.

For s1 = "b" and s2 = "a1", the output should be alphanumericLess(s1, s2) = false.

Since b is greater than a, s1 is larger.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s1.length ≤ 20.

[input] string s2

A string consisting of English letters and digits.

Guaranteed constraints:
1 ≤ s2.length ≤ 20.

[output] boolean

true if s1 is alphanumerically strictly less than s2, false otherwise.
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

function alphanumericLess(s1, s2) {
  if (s1 == s2) return false;

    let arr1 = splitTokens(s1);
    let arr2 = splitTokens(s2);

    let isMoreLeadingZeros = false;
    let maxLen = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLen; i++) {
        if (arr1[i] == undefined) return true;
        if (arr2[i] == undefined) return false;

        if (!isNaN(arr1[i])) {
            if (isNaN(arr2[i])) return true;
            else {
                if (compare(arr1[i], arr2[i]) == 1) {
                    return true;
                } else if (compare(arr1[i], arr2[i]) == -1) return false;
                else {

                    if (arr1[i].length >= arr2[i].length) isMoreLeadingZeros = true;
                    continue;
                }
            }
        } else {
            if (!isNaN(arr2[i])) return false;
            else {
                if (arr1[i] == arr2[i]) continue;
                if (arr1[i] < arr2[i]) return true;
                else if (arr1[i] > arr2[i]) return false;
            }
        }
    }
    return isMoreLeadingZeros ? true : false;
}

function splitTokens(str) {
    let ans = [],
        tmp = '';

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {

            if (!isNaN(tmp)) {
                tmp != '' && ans.push(tmp);
                ans.push(str[i]);
                tmp = '';
            }
        } else {
            if (!isNaN(tmp)) {
                tmp += str[i];
            } else {
                tmp != '' && ans.push(tmp);
                tmp = str[i];
            }
        }
    }
    if (tmp != '') ans.push(tmp);
    return ans;
}

function compare(s1, s2) {
    num1 = removeLeadingZeros(s1);
    num2 = removeLeadingZeros(s2);

    if (num1.length < num2.length) return 1;
    if (num1.length > num2.length) return -1;

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] < num2[i]) return 1;
        if (num1[i] > num2[i]) return -1;
    }
    return 0;
}
function removeLeadingZeros(s) {
    return s.replace(/^0+/, '');
}
