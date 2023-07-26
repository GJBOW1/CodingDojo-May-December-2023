// Step 1: Always Hungry - Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

let yummies = 0

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == "food") {
            console.log("yummy")
            yummies = yummies + 1
        }
        if (yummies == 0) {
            console.log("I am hungry")
        }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// Step 2: High Pass Filter - Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for ( var i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Step 3: Better than average - Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    var average = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        average = sum / arr.length;
    }
    var count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count = count + 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Step 4: Array Reverse - Write a function that will reverse the values an array and return them.

function reversed(arr) {
    arr.reverse()
    return arr;
}

var result = reversed(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Step 5: Fibonacci Array - Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    var fibArr = [0, 1]
    for (var i = 1; i < 10; i++) {
        if (i == 0 || i == 1){
            fibArr[i] = fibArr[0] + fibArr[1]
        }
        else (
            fibArr[i] = fibArr[i-1] + fibArr[i-2]
        )
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
