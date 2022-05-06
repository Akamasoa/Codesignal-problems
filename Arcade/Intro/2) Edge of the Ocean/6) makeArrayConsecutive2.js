/*
Ratiorg got of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than 
the previous one exactly by . He may need some additional statues to be able to accomplish that. Help him figure out the minimum 
number of additional statues needed.statues1

Example

For , the output should be
.statues = [6, 2, 3, 8]makeArrayConsecutive2(statues) = 3

Ratiorg needs statues of sizes , and .457

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
,
.1 ≤ statues.length ≤ 100 ≤ statues[i] ≤ 20

[output] integer


The minimal number of statues that need to be added to existing such that it contains every integer size from an interval 
(for some ) and no other sizes.statues[L, R]L, R

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) + 1 - statues.length;
}
