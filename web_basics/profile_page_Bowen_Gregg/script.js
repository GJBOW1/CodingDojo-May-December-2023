// Gregg Bowen - Script page for assignment

function getName() {
    newPerson = document.querySelector('#namePerson')
    if (newPerson.innerText == "Hank Cowdog") {
        newPerson.innerText = "Jane Doe"
    }
    else {
        newPerson.innerText = "Hank Cowdog"
    }
}

function disappear(element) {
    element.style.display = "none"
}

function accepting() {
    higherNumber = document.querySelector('.connectionCount')
    higherNumber.innerText--
    moreConnections = document.querySelector('.yourConnectionsCount')
    moreConnections.innerText++
}

function denying() {
    lowerNumber = document.querySelector('.connectionCount')
    lowerNumber.innerText--
}