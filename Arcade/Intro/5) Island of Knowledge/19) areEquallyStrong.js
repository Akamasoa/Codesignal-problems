/*
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), 
and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For , , , and , the output should beyourLeft = 10yourRight = 15friendsLeft = 15friendsRight = 10
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For , , , and , the output should beyourLeft = 15yourRight = 10friendsLeft = 15friendsRight = 10
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For , , , and , the output should be
.yourLeft = 15yourRight = 10friendsLeft = 15friendsRight = 9areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false
Input/Output

[execution time limit] 4 seconds (js)

[input] integer yourLeft

A non-negative integer representing the heaviest weight you can lift with your left arm.

Guaranteed constraints:
.0 ≤ yourLeft ≤ 20

[input] integer yourRight

A non-negative integer representing the heaviest weight you can lift with your right arm.

Guaranteed constraints:
.0 ≤ yourRight ≤ 20

[input] integer friendsLeft

A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

Guaranteed constraints:
.0 ≤ friendsLeft ≤ 20

[input] integer friendsRight

A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

Guaranteed constraints:
.0 ≤ friendsRight ≤ 20

[output] boolean

true if you and your friend are equally strong, otherwise.false

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
if (yourLeft === friendsLeft && yourRight === friendsRight) {
		return true;
	}
if (yourLeft === friendsRight && yourRight === friendsLeft) {
		return true;
	}
	return false;
}

