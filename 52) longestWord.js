/*
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
solution(text) = "steady".

Input/Output

[execution time limit] 4 seconds (js)

[input] string text

Guaranteed constraints:
4 ≤ text.length ≤ 50.

[output] string

The longest word from text. It's guaranteed that there is a unique output.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(text) {
 let longestWord = '';
    let currentWord = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i].match(/[a-z]/i)) {
            currentWord += text[i];
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        }
    }
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
    return longestWord;
}


//Short solution from a friend:

// function longestWord(text) {
//     var words = text.match(/\w+/g);
    
//     var ml = Math.max(...words.map(el=>el.length))
    
//     for(var i=0;i< words.length; i++){
//         if(words[i].length == ml)
//             return words[i]
//     }
// }
