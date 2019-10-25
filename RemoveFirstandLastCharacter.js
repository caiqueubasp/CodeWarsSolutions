// // Remove First and Last Character

// // It 's pretty straightforward. Your goal is to create a function that removes
//  the first and last characters of a string.
// //  You're given one parameter, the original string.You don 't have to worry with
//  strings with less than two characters.

var str = "eloquent";
var str1 = "country";
var str2 = "person";
var str3 = "place";

function removeChar(str) {
    var strArr = str.split("");
    var firstItem = strArr.shift() + strArr.pop();
    var finalResult = strArr.join("");
    return finalResult;

};