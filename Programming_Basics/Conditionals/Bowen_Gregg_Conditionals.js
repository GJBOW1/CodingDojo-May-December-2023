/*
As a diligent student, I want to reward myself if I finish my homework, and based on the time of day:
I want a latte if it's before 10 am
I want a hot chocolate it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep!

Feature 1
Building off the MVP, if I'm up for ice cream, I want strawberry - but only if it's Wednesday. Otherwise, I want vanilla.

Feature 2 (hard) - Optional
Building off Feature 1, I want to adjust the current conditions and add a new option so that if the time is between 3 pm - 6 pm, 
I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd.

Feature 3 (super hard) - Optional
Building off Feature 2, I want my options for the 3 pm - 6 pm slot to be a random selection: if the time is even, I want my selections to be ice cream, 
cookies, or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake.
*/

//*Feature 1:

function iceCream(mood, dayofWeek) {
    if (mood == true && dayofWeek == "Wednesday") {
        console.log("I will eat strawberry ice cream!")
    }
    else {
        console.log("I will eat vanilla ice cream!")
    }
}
iceCream(true, "Monday")


//*Feature 2:

function iceCream(mood, dayofWeek, time) {
    if (mood == true && dayofWeek == "Wednesday") {
        if (time > 1500 && time < 1800){
            if (time % 2 == 0) {
                console.log("I will eat strawberry ice cream!")
            }
            else {
                console.log("Forget ice cream. I want hot chocolate!")
            }
        }
    }
    else {
        console.log("I will eat vanilla ice cream!")
    }
}
iceCream(true, "Wednesday", 1800)

//*Feature 3:

var time = Math.random() * 1800 | 1500;
function iceCream(mood, dayofWeek, time) {
    if (mood == true && dayofWeek == "Wednesday") {
        if (time > 1500 && time < 1800){
            if (time % 2 == 0) {
                console.log("Great, it's " + time + " hrs! You can choose between ice cream, cookies, or candy!")
            }
            else {
                console.log("Great, it's " + time + " hrs! You can choose between hot chocolate, tea, or cake!")
            }
        }
    }
    else {
        console.log("I will eat vanilla ice cream!")
    }
}
iceCream(true, "Wednesday", time)
