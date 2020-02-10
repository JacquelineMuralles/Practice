'use strict';
function isString(input) {
    return typeof(input) === "string";
}
// console.log(isString("hello"));
// console.log(isString(4));

function notAString(input) {
    return typeof input !== "string"
}

// console.log(notAString(4));
// console.log(notAString("five"));

//Define a function named isOdd that takes in a single input. If the input is an odd number or a string containing an odd number, return true. Any other input should return false.

function isOdd (input) {
    return (input % 2 !== 0) || (typeof (input % 2 !== 0) === "string");
}

function isOdd(input) {
    return parseInt(input, 10) % 2 !== 0;
}

// console.log(isOdd(3));
// console.log(isOdd("5"));
// console.log(isOdd(4));
// console.log(isOdd("8"));

function equal(a,b) {
    return a === b;
}

// console.log(equal(3, 4));
// console.log(equal("3", 3));
// console.log(equal(3, 3));
// console.log(equal("3", "3"));

// Create a function that takes two numbers as arguments
// and return their sum.

function add(a,b) {
    return parseInt(a) + parseInt(b);
}

// console.log(add(10, 12));
// console.log(add(4, 3));
// console.log(add("2", "2"));

// Something which is not true is false, !true === false
// but something which is not not true is true!  !!true === true
// Create a function where given n number of “not”, evaluate whether it’s true or false.
// function not(n, boo)
//     Examples
// notNotNot(1, true) ➞ false
// // Not true
// notNotNot(2, false) ➞ false
// // Not not false
// notNotNot(6, true) ➞ true
// // Not not not not not not true
// Notes
// Even though this challenge can be easily solved through the use of an if | else block, you might want to solve it through the use of a Boolean Logic Operator or a Bitwise Operator, taking the opportunity to become acquainted with these methods (check the Resources tab to find specific links).

function notNotNot(n, boo) {
return n % 2 === 1 ? !boo : boo;
}

//Truthy or Falsy?
//A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
// false
// null
// undefined
// 0
// NaN
// ""
//
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
//
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

function truthyFalsy (dataType) {
    return Boolean(dataType) === true ? 1 : 0
}

// function truthyFalsy (dataType) {
//     if(Boolean(dataType) === true) {
//         return 1
//     }else {
//         return 0
//     }
// }

// function truthyFalsy(input) {
//     return Number(Boolean(input > 0));
// }

// function truthyFalsy (x) {
//     return x ? 1 : 0;
// }
//
// console.log(truthyFalsy(1));
// console.log(truthyFalsy(false));
// console.log(truthyFalsy(0));
// console.log(truthyFalsy(NaN));
// console.log(truthyFalsy("24"));
// console.log(truthyFalsy(""));
// console.log(truthyFalsy(24));

//1, 0, 0, 0, 1, 0, 1


// Convert Hours and Minutes into Seconds
// Published by Érick in JavaScriptLANGUAGES
// C++
// Java
// JavaScript
// Python
// Ruby
// Translate
// language_fundamentalsmath
// Write a function that takes two integers (hours, minutes) and converts them into seconds.
//     Examples
// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0
// Notes
// Don’t forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you’re really stuck, unlock solutions in the Solutions tab.

// function seconds(hrs, min) {
//     return (hrs * 60) * 60 min) * 60
// }
// //10, 800  180
// console.log(seconds(3, 3));
// //720 300
// console.log(seconds(2, 5));