/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function addBorder(picture) {
 // shift a string of '*' to the array the length of the strings

    let topFrame = '*'.repeat(picture[0].length);
    picture.unshift(topFrame);
    //console.log(picture);
    // add a '*' to the beginning and end of each string
    for(let i = 0; i < picture.length; i ++){
        picture[i] = picture[i] + '*';
        picture[i] = '*' + picture[i];
    }
    
    
    // push a string of '*' to the array with the same length as the strings
    let bottomFrame = '*'.repeat(picture[1].length);
    
    picture.push(bottomFrame);
    return picture;
}
