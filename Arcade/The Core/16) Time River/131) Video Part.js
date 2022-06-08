/*
You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

Example

For part = "02:20:00" and total = "07:00:00", the output should be
solution(part, total) = [1, 3].

You have watched 1 / 3 of the whole video.

Input/Output

[execution time limit] 4 seconds (js)

[input] string part

A string of the following format "hh:mm:ss" representing the time you have been watching the video.

[input] string total

A string of the following format "hh:mm:ss" representing the total video duration.

[output] array.integer

An array of the following format [a, b] (where a / b is a reduced fraction).

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(part, total) {
part = part.split(":").map(Number);
  total = total.split(":").map(Number);
  let partSecs = part[0] * 3600 + part[1] * 60 + part[2];
  let totalSecs = total[0] * 3600 + total[1] * 60 + total[2];
  let mcd = gcd(partSecs, totalSecs);
  return [partSecs / mcd, totalSecs / mcd];
}
function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}
