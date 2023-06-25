
//Here is the initial version of the function. I will provide a practice value of 42 to get the if response.
var rider_height = 42

function height_requirement() {
    if (rider_height >= 42) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry, kiddo. Maybe next year!");
    }
}
height_requirement()

//Sketch Feature 1:

//I will provide the below practice values of 43 and 10, which will return the if response.
var rider_height = 43
var rider_age = 10

function height_age() {
    if (rider_height >= 42 && rider_age >= 10) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry, kiddo. Maybe next year!");
    }
}
height_age()


//Sketch Feature 2:

//I will provide the below practice values of 9 and 40, which will return the else response.
rider_age = 9;
rider_height = 40;

function height_or_age() {
    if (rider_height >= 42) {
        console.log("Get on that ride, kiddo!");
    }
    else if (rider_age >= 10) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry, kiddo. Maybe next year!");
    }
}
height_or_age()




