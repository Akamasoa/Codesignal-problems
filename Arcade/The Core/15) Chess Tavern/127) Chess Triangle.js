/*
Consider a bishop, a knight and a rook on an n × m chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a triangle.

Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.



Example

For n = 2 and m = 3, the output should be
solution(n, m) = 8.



Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 40.

[input] integer m

Guaranteed constraints:
1 ≤ m ≤ 40,
3 ≤ n · m.

[output] integer

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(n, m) {
return (
    times(n, m, 2, 3) +
    times(n, m, 3, 3) +
    times(n, m, 2, 4) +
    times(n, m, 3, 4)
  );
}

function ways(n, m, x, y) {
  if (n < x || m < y) return 0;
  return (n - x + 1) * (m - y + 1);
}
function times(n, m, x, y) {
  return (ways(n, m, x, y) + ways(m, n, x, y)) * 8;
}
