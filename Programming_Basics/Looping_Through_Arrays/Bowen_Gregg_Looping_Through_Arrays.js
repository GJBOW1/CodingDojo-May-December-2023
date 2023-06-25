// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
/*
•  1. Write a for loop that will traverse through an array of numbers, and print each number.
•  2. Write a for loop that will traverse through an array of numbers, and print the sum of the number and the index of the number in the array.
•  3. Write a for loop that will traverse through an array of numbers, and print only the numbers greater than 5.
•  Ninja Bonus: Modify your solution for #3 so that any numbers in the array that are not greater than 5 are instead replaced with a string of "No dice." This string should not be printed.
*/

//*Challenge 1:

var arr1 = [8, 6, 7, 5, 3, 0, 9];
for(i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

//*Challenge 2:
var arr2 = [4, 7, 13, 13, 19, 37, -2];
sum = 0;
for(i = 0; i < arr2.length; i++) {
    sum = sum + arr2[i]
    console.log(sum)
    console.log(i)
}

//*Challenge 3:
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(i = 0; i < arr3.length; i++) {
    if(arr3[i] > 5){
        console.log(arr3[i])
    }
}

//*Bonus:
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(i = 0; i < arr3.length; i++) {
    if(arr3[i] > 5) {
        console.log(arr3[i])
    }
    else if(arr3[i] <= 5) {
        arr3[i] = "No dice."
    }
}
