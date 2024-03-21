"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n1 = parseInt(prompt('Enter Your First NUmber:  '));
var n2 = parseInt(prompt('Enter Your Second NUmber:  '));
var operator = (prompt('Enter Your Operator:  '));
if (operator == "+") {
    console.log("".concat(n1, "  ").concat(operator, "  ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == "-") {
    console.log("".concat(n1, "  ").concat(operator, "  ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == "*") {
    console.log("".concat(n1, "  ").concat(operator, "  ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == "/") {
    console.log("".concat(n1, "  ").concat(operator, "  ").concat(n2, " =  ").concat(n1 / n2));
}
else {
    console.log("Enter the correct Operator ");
}
