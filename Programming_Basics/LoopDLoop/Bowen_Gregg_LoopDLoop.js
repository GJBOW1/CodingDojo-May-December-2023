/*
*Bowen, Gregg 
*20 May 2023

*Assignment instructions:
A local fitness coach and a mechanical engineer are building an IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill but stops giving candy out at mile 6. You're tasked with building the loop functionality to know when to give a piece of candy and when to stop.

Step 1: Using comments in your VS Code, answer the following questions:

How do we know we need a loop here?   Because the function will perform the same action at a regular interval.
What's the starting point of the loop?   The starting point of the loop is 2. 
When should the loop stop?   The loop should stop at 6 miles.
How will the loop know when to stop?   By defining the stop point as being <= 6.
What's incrementing for each iteration of the loop?   The increment is i+=2, so every two miles.
What variables do we need?   We need the 'i' index variable. 
*/

//* My solution: 

function candyWheel() {
    for (var i = 2; i <= 6; i += 2) {
        console.log("Congrats on mile " + i + "! Enjoy a piece of candy!")
    }
}
candyWheel()

//*Bonus:

// Instructions: Create a new loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour.   

// I included the example speed of 5.6 to demonstrate the runner is both going fast enough and hitting the mile requirement.

speed = 5.6
function fastCandy() {
    for (var i = 2; i <= 6; i += 2) {
        if (speed > 5.5) {
            console.log("Congrats on mile " + i + "! Nice pace! Enjoy a piece of candy!")
        }
        else {
            console.log("Sorry, but you need to pick up the speed to get a piece of candy!")
        }
    }
}
fastCandy()