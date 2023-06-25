


var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}

/* 
*T=Diagram for Challenge 1
arr = ["Up", "You", "Give", "To", "Going", "Never"]
i = 5 -> 4 -> 3 -> 2 -> 1 -> 0

*Predicted output: NeverGoingToGiveYouUp

*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) { // arr.length = 10
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

/* 
*T=Diagram for Challenge 1
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var i = 1 -> 3 -> 5 -> 7 -> 9 -> 11
sum = 0 + 2 = 2; 2 + 4 = 6; 6 + 6 = 12; 12 + 8 = 20; 20 + 10 = 30


*Predicted output: 2,2,4,6,6,12,8,20,10,30

*/

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){ // arr.length = 7
    if(arr[i] >= 6) {
        console.log(true);
    }
}

/* 
*T=Diagram for Challenge 1
arr = [8, 2, 0, 6, 12, 4, 3]
i = 0 -> 1 -> 2 -> 3 -> 4

*Predicted output: true,true,true

*/