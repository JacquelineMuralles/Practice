"use strict";

// function isNegative(number) {
//     return parseFloat(number) < 0;
// }

function isTen(number) {
    return parseFloat(number) === 10;
}

//Write a function named 'double' that accepts a number and returns the number squared.
function double(num) {
    return parseFloat(num) * parseFloat(num);
//    or: Math.pow(num,2);
}

//Write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3
function remove3s(array) {
    var numArray = [];
    numbers.forEach(function (num) {
        if(num !== 3){
            numArray.push(num)
        }
    })
}

//Write a function named sumAll that returns the sum of all numbers in an array
function sumAll(array) {
    var sumArray = [];
    for(var i = 0; i < array.length; i++){
        sumArray += array[i];
    }
    return sumArray
}

//write a function named countEvens that accepts an array of nums and returns the number of even numbers in the array.
function countEvens (array) {
    var evens = 0;
    arr.forEach(function (x) {
    if (x % 2 === 0){
        evens++;
    }
    return evens;
    })
}

//write a function called stringLength that returns the length of a string, if the input is not a string, return false;
function stringLength(input) {
    if (typeof input === "string"){
        return input.length;
    }else {
        return false;
    }
}


// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str){
    return str.split(" ").length;
}
//TEST
// countWords("Just an example here move along") ➞ 6
//
// countWords("This is a test") ➞ 4
//
// countWords("What an easy task, right") ➞ 5



