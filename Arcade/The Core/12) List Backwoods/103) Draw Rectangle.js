/*
You are implementing a command-line version of the Paint app. Since the command line doesn’t support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

Example

For


canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]

and rectangle = [1, 1, 4, 3], the output should be


drawRectangle(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                  					['a', '*', '-', '-', '*', 'a', 'a', 'a'],
                  					['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
                  					['b', '*', '-', '-', '*', 'b', 'b', 'b'],
                  					['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]

Here is the rectangle, colored for illustration:


[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
['a', '*', '-', '-', '*', 'a', 'a', 'a'],
['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
['b', '*', '-', '-', '*', 'b', 'b', 'b'],
['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]

Note that rectangle sides are depicted as -s and |s, asterisks (\*) stand for its corners and all of the other “pixels” remain the same.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char canvas

A non-empty rectangular matrix of characters.

Guaranteed constraints:
2 ≤ canvas.length ≤ 10,
2 ≤ canvas[0].length ≤ 10.

[input] array.integer rectangle

Array of four integers - [x1, y1, x2, y2].

Guaranteed constraints:
0 ≤ x1 < x2 < canvas[i].length,
0 ≤ y1 < y2 < canvas.length.

[output] array.array.char

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

function drawRectangle(canvas, rectangle) {
  canvas[rectangle[1]][rectangle[0]] = "*";
  canvas[rectangle[3]][rectangle[2]] = "*";
  canvas[rectangle[1]][rectangle[2]] = "*";
  canvas[rectangle[3]][rectangle[0]] = "*";
  for (let i = rectangle[0] + 1; i < rectangle[2]; i++) {
    canvas[rectangle[1]][i] = "-";
    canvas[rectangle[3]][i] = "-";
  }
  for (let i = rectangle[1] + 1; i < rectangle[3]; i++) {
    canvas[i][rectangle[0]] = "|";
    canvas[i][rectangle[2]] = "|";
  }
  return canvas;
}
