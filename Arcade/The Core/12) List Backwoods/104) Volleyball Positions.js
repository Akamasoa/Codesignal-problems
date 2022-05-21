/*
You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you’re curious about how the coach arranged the players on the field at the start of the game.

The team you favor plays in the following formation:


0 3 0
4 0 2
0 6 0
5 0 1

where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

Here’s how the players change their positions:



Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

Example

For 
formation = [["empty", "Player5", "empty"],
["Player4", "empty", "Player2"],
["empty", "Player3", "empty"],
["Player6", "empty", "Player1"]]

and k = 2, the output should be


volleyballPositions(formation, k) = [
["empty", "Player1", "empty"],
["Player2", "empty", "Player3"],
["empty", "Player4", "empty"],
["Player5", "empty", "Player6"]
]

For 
formation = [["empty", "Alice", "empty"],
["Bob", "empty", "Charlie"],
["empty", "Dave", "empty"],
["Eve", "empty", "Frank"]]

and k = 6, the output should be


volleyballPositions(formation, k) = [
    ["empty", "Alice", "empty"],
    ["Bob",   "empty", "Charlie"],
    ["empty", "Dave",  "empty"],
    ["Eve",   "empty", "Frank"]
]

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string formation

Array of strings representing names of the players in the positions corresponding to those in the schema above.
It is guaranteed that for each empty position the corresponding element of formation is "empty".
It is also guaranteed that there is no player called "empty" in the team.

Guaranteed constraints:
formation.length = 4,
formation[i].length = 3.

[input] integer k

The number of times the team gained the serve.

Guaranteed constraints:
0 ≤ k ≤ 109.

[output] array.array.string

Team arrangement at the start of the game.
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

