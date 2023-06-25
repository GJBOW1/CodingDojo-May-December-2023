
// We can console.log the `8` in this array if we
//console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d, value) {
    for (i = 0; i < arr2d.length; i++){
        if (arr2d[i] == value) {
            arr2d[i] = true;
            console.log("true");
        }
        else; {
            arr2d[i] = false;
            console.log("false");
        }
    }
}
isPresent2d([[2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]], 5)

//FROM THIS, I NEED TO LEARN HOW TO WRITE A FUNCTION THAT WILL ENABLE ME TO INPUT A 2D ARRAY INTO A VARIABLE VALUE FOR A FUNCTION
//AND WRITE A FOR LOOP THAT WILL RUN THROUGH EACH OF THE SUB-ARRAYS WITHOUT STOPPING. THE ONE ABOVE WILL ONLY TAKE ME THROUGH
//ONE SUB-ARRAY. I ALSO NEED TO PRACTICE THE FLATTEN ARRAY EXERCISE ON THE SAME NESTING TAB.