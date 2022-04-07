/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note:

In the HTML syntax, most elements are written with a start tag and an end tag, with the content in between. An HTML tag is composed of the name of the element, surrounded by angle brackets. An end tag also has a slash after the opening angle bracket. Start tags may incorporate any number of HTML attributes (like a class, an id etc) which are not repeated inside the end tags. Each HTML attribute is described by a string of one of the following formats: name=value or just name.

Example

For startTag = ""</code>, the output should be htmlEndTagByStartTag(startTag) = "</button>";
For startTag = ""</code>, the output should be htmlEndTagByStartTag(startTag) = "</i>".
Input/Output

[execution time limit] 4 seconds (js)

[input] string startTag

Guaranteed constraints:
3 ≤ startTag.length ≤ 75.

[output] string

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

