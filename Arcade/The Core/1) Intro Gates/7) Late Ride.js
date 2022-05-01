/*
One night you go for a ride on your motorcycle. At you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.00:00

When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that minutes have passed since .n00:00

Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format would show.hh:mm

Example

For , the output should be
.n = 240solution(n) = 4

Since minutes have passed, the current time is . The digits sum up to , which is the answer.24004:000 + 4 + 0 + 0 = 4

For , the output should be
.n = 808solution(n) = 14

808 minutes mean that it's now, so the answer should be .13:281 + 3 + 2 + 8 = 14

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

The duration of your ride, in minutes. It is guaranteed that you've been riding for less than a day (24 hours).

Guaranteed constraints:
.0 ≤ n < 60 · 24

[output] integer

The sum of the digits the digital timer would show.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(n) {
 	return (Math.floor(n / 60) + '' + (n % 60)).split('').map(Number).reduce((a, b) => a + b);
}
