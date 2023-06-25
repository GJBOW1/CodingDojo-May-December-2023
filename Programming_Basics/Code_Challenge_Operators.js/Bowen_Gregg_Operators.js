

function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    if (numberOfPieces % numberOfPeople === 0) {
        console.log("No leftovers for you!")
    }
    else if (numberOfPieces % numberOfPeople <= 2) {
        console.log("You have some leftovers.")
    }
    else if (numberOfPieces % numberOfPeople == 3, 4, 5) {
        console.log("You have leftovers to share.")
    }
    else if (numberOfPieces % numberOfPeople >= 5) {
        console.log("Hold another party!")
    }
}

howMuchLeftOverCake(5,5)
