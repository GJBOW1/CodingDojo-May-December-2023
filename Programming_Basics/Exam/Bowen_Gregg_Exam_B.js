/*
 * White Belt - Option B
 * Your Name: __Gregg Bowen_________________
 */

/* Question 1
 * Predict the result of the following code. 
 */ 

var answer = 6 - 2 * 2;
console.log(answer);

// Your prediction here: 2

/* Question 2
 * Predict the result of the following code.
 */

var answer = (6 - 2) * 2;
console.log(answer);

// Your prediction here: 8

/* Question 3
 * Predict the result of the following code.
 */

for(var i=10; i<15; i++) {
    console.log(i);
    i += 2;
}

// Your prediction here: 10,13

/* Question 4
 * Predict the result of the following code.
 */

for(var i=3; i>-3; i--) {
    console.log(i);
    i -= 1;
}

// Your prediction here: 3,1,-1

/* Question 5
 * Predict the result of the following code.
 */

var i = 13;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}

// Your prediction here: 13

/* Question 6
 * Predict the result of the following code.
 */

for(var i=7; i>2; i--) {
    if(i % 2 == 0) {
        console.log(i);
    } else {
        console.log("odd");
    }
}

// Your prediction here: odd,6,odd,4,odd

/* Question 7
 * Predict the result of the following code.
 */

var arr = [-3, 4, 3, 6, 3.3, 1, 3];
var count = 0;
for(var i=0; i<arr.length; i++) { 
    if(arr[i] == 3) {
        count++;
    }
}
console.log(count);

// Your prediction here: 2

/* Question 8
 * Complete the function in the code below to console log all odd numbers from 3 to 99.
 */ 

function printOdds3to99() {
    for(i = 3; i < 100; i++)
        if(i % 2 === 1){
            console.log(i)
        }
}

printOdds3to99();

/* Question 9
 * Complete the function in the code below to return the smallest value of an array.
 * Given: [3, 6, 4, 9, 2]
 * Return: 2
 */

function findSmallest(arr) {
    var minimum = [0]
    for(i = 0; i < arr.length; i++)
        if(minimum > arr[i]) {
            minimum = arr[i];
        }
    console.log(minimum);
    return minimum;
} 

findSmallest([12, 21, 3.6, 9, 12, -2, 8]);


/* Question 10
 * Complete the function in the code below to return a count of all values in the array larger than another number "y".
 * Given: [3, 6, 4, 9, 2], 5
 * Return: 2
 */

function countGreaterThanY(arr, y) {
    var count = 0;
    for(i = 0; i < arr.length; i++)
        if(arr[i] > y) {
            count++
        }
    console.log(count);
    return count;
}

countGreaterThanY([22, 12, 13.6, 19, 42, 8], 15);
