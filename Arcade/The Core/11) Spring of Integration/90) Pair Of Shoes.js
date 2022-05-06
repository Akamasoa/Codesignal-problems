/*
Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it’s a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

For

shoes = [[0, 21],
[1, 23],
[1, 21],
[0, 23]]

the output should be pairOfShoes(shoes) = true;

For shoes = [[0, 21],
[1, 23],
[1, 21],
[1, 23]]
the output should be pairOfShoes(shoes) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer shoes

Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Guaranteed constraints:
1 ≤ shoes.length ≤ 200,
1 ≤ shoes[i][1] ≤ 100.

[output] boolean

true if it is possible to pair the shoes, false otherwise.
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

function pairOfShoes(shoes) {
  let pos;
  let shoe;
  while (shoes.length) {
    shoe = shoes.pop();
    if (
      (pos = shoes.findIndex(
        ([type, size]) => size === shoe[1] && type === 1 - shoe[0]
      )) >= 0
    ) {
      shoes.splice(pos, 1);
    } else {
      return false;
    }
  }
  return true;
}
