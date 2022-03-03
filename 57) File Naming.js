/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string names

Guaranteed constraints:
5 ≤ names.length ≤ 1000,
1 ≤ names[i].length ≤ 15.

[output] array.string

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*/

function solution(names) {
 let n = [];
    
    for(let i=0; i < names.length; i++) {
        let max = 0;
        let m = [];
        let f = n.filter(j=>{
            let reg = new RegExp('^(?:' + names[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + '(?:\\((\\d+)\\))?)$');
            if(reg.test(j)) {
                if(reg.exec(j)[1] ==undefined )
                    m[0] =true;
                else {
                    m[Number(reg.exec(j)[1])] = true;
                }
            }
            return reg.test(j);
        });
        for(var k = 0; k < m.length; k++) {
            if(!m[k])
                break;
        }
        if(f.length){
            names[i] = names[i]+ (k ? ('('+ (k)+')') : '');
        }
        n.push(names[i])
    }
    return n;
}
