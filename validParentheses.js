// Valid Parentheses

// 2864789% of 1,0596,069 of 11,394xDranik5 Issues Reported
// JavaScript
// Node v6.11.0
// VIM
// EMACS
// Instructions
// Output
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples

// console.log("()")              =>  true
// console.log(")(()))"  )        =>  false
// console.log("(")               =>  false
// console.log("(())(((()))())")  =>  true
// Constraints


// 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.

//Solution 1 using loop


function validParentheses(str) {

    if (str.length === 0) {
        return true;
    }
    if (str[0] === ")" || str[str.length - 1] === "(") {
        return false;
    } else {
        if (str[1] === ")") {
            return validParentheses(str.slice(2));
        } else {
            var index = str.indexOf(")");
            return validParentheses(str.slice(0, index - 1) + str.slice(index + 1));
        }
    }
}



/// REFACTOR SOLUTION

function validParentheses(parens) {
    var indent = 0;


    for (var i = 0; i < parens.length && indent >= 0; i++) { //indent>=0 is critical
        indent += (parens[i] == '(') ? 1 : -1;
        console.log(indent, parens[i]);
    }

    return (indent == 0);
}