var prompt = require('prompt-sync')();
//
// get input from the user.
//
let n1 = parseInt(prompt('Enter Your First NUmber:  '));
let n2 = parseInt(prompt('Enter Your Second NUmber:  '));
let operator = (prompt('Enter Your Operator:  '));
if(operator== "+"){
console.log(`${n1}  ${operator}  ${n2} = ${n1 + n2}`)
}
else if(operator== "-"){
    console.log(`${n1}  ${operator}  ${n2} = ${n1 - n2}`)
}
else if(operator== "*"){
    console.log(`${n1}  ${operator}  ${n2} = ${n1 * n2}`)
}
else if(operator== "/"){
    console.log(`${n1}  ${operator}  ${n2} =  ${n1 / n2}`)
} 
else {
    console.log("Enter the correct Operator ")
}
export {};