/*
You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.

Example

For length = [1, 3, 2], width = [1, 3, 2], and height = [1, 3, 2], the output should be boxesPacking(length, width, height) = true;
For length = [1, 1], width = [1, 1], and height = [1, 1], the output should be boxesPacking(length, width, height) = false;
For length = [3, 1, 2], width = [3, 1, 2], and height = [3, 2, 1], the output should be boxesPacking(length, width, height) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer length

Array of positive integers.

Guaranteed constraints:
1 ≤ length.length ≤ 104,
1 ≤ length[i] ≤ 2 · 104.

[input] array.integer width

Array of positive integers.

Guaranteed constraints:
width.length = length.length,
1 ≤ width[i] ≤ 2 · 104.

[input] array.integer height

Array of positive integers.

Guaranteed constraints:
height.length = length.length,
1 ≤ height[i] ≤ 2 · 104.

[output] boolean

true if it is possible to put all boxes into one, false otherwise.
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

function solution(length, width, height) {
 let isPosible = true;
  for (let i = 0; i < length.length; i++) {
    for (let j = 0; j < length.length; j++) {
      if (i === j) {
        continue;
      }
      if (
        !(
          (length[i] < length[j] &&
            width[i] < width[j] &&
            height[i] < height[j]) ||
          (length[i] > length[j] &&
            width[i] > width[j] &&
            height[i] > height[j]) ||
          (length[i] < length[j] &&
            width[i] < height[j] &&
            height[i] < width[j]) ||
          (length[i] > length[j] &&
            width[i] > height[j] &&
            height[i] > width[j]) ||
          (length[i] < height[j] &&
            width[i] < width[j] &&
            height[i] < length[j]) ||
          (length[i] > height[j] &&
            width[i] > width[j] &&
            height[i] > length[j]) ||
          (length[i] < width[j] &&
            width[i] < length[j] &&
            height[i] < height[j]) ||
          (length[i] > width[j] &&
            width[i] > length[j] &&
            height[i] > height[j]) ||
          (length[i] < height[j] &&
            width[i] < length[j] &&
            height[i] < width[j]) ||
          (length[i] > height[j] &&
            width[i] > length[j] &&
            height[i] > width[j]) ||
          (length[i] < width[j] &&
            width[i] < height[j] &&
            height[i] < length[j]) ||
          (length[i] > width[j] &&
            width[i] > height[j] &&
            height[i] > length[j])
        )
      ) {
        isPosible = false;
      }

      if (!isPosible) {
        break;
      }
    }
    if (!isPosible) {
      break;
    }
  }
  return isPosible;
}
