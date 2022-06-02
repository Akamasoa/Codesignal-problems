/*
In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

Example

For bishop1 = "d7" and bishop2 = "f5", the output should be
solution(bishop1, bishop2) = ["c8", "h3"].



For bishop1 = "d8" and bishop2 = "b5", the output should be
solution(bishop1, bishop2) = ["b5", "d8"].

The bishops don't belong to the same diagonal, so they don't move.


Input/Output

[execution time limit] 4 seconds (js)

[input] string bishop1

Coordinates of the first bishop in chess notation.

Guaranteed constraints:
bishop1.length = 2,
'a' ≤ bishop1[0] ≤ 'h',
1 ≤ bishop1[1] ≤ 8.

[input] string bishop2

Coordinates of the second bishop in the same notation.

Guaranteed constraints:
bishop2.length = 2,
'a' ≤ bishop2[0] ≤ 'h',
1 ≤ bishop2[1] ≤ 8.

[output] array.string

Coordinates of the bishops in lexicographical order after they check the diagonals they stand on.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(bishop1, bishop2) {
let bishopCoords1 = bishop1.split("");
  let bishopCoords2 = bishop2.split("");
  let tmp;
  bishopCoords1[0] = 1 + bishopCoords1[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords1[1] = Number(bishopCoords1[1]);
  bishopCoords2[0] = 1 + bishopCoords2[0].charCodeAt(0) - "a".charCodeAt(0);
  bishopCoords2[1] = Number(bishopCoords2[1]);
  let newPos1 = bishopCoords1.slice();
  let newPos2 = bishopCoords2.slice();
  if (
    bishopCoords1[0] + bishopCoords1[1] ===
    bishopCoords2[0] + bishopCoords2[1]
  ) {
    if (bishopCoords1[0] + bishopCoords1[1] > 9) {
      newPos1[0] = 8;
      newPos2[1] = 8;
      newPos1[1] = bishopCoords1[0] + bishopCoords1[1] - 8;
      newPos2[0] = bishopCoords1[0] + bishopCoords1[1] - 8;
    } else {
      newPos1[0] = 1;
      newPos2[1] = 1;
      newPos1[1] = bishopCoords1[0] + bishopCoords1[1] - 1;
      newPos2[0] = bishopCoords1[0] + bishopCoords1[1] - 1;
    }
  } else if (
    bishopCoords1[0] - bishopCoords1[1] ===
    bishopCoords2[0] - bishopCoords2[1]
  ) {
    if (bishopCoords1[0] - bishopCoords1[1] < 0) {
      newPos1[0] = 1;
      newPos1[1] = 1 + bishopCoords1[1] - bishopCoords1[0];
      newPos2[0] = 8 + bishopCoords1[0] - bishopCoords1[1];
      newPos2[1] = 8;
    } else {
      newPos1[0] = 1 + bishopCoords1[0] - bishopCoords1[1];
      newPos1[1] = 1;
      newPos2[0] = 8;
      newPos2[1] = 8 - (bishopCoords1[0] - bishopCoords1[1]);
    }
  }
  newPos1[0] = String.fromCharCode(newPos1[0] - 1 + "a".charCodeAt(0));
  newPos1 = newPos1.join("");
  newPos2[0] = String.fromCharCode(newPos2[0] - 1 + "a".charCodeAt(0));
  newPos2 = newPos2.join("");
  return [newPos1, newPos2].sort();
}
