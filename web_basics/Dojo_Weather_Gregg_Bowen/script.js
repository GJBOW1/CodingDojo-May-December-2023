function alerting() {
    alert('Loading weather report...')
}

function changeTemperature() {
    let highToday = document.querySelector('.todayHigh')
    let highTomorrow = document.querySelector('.tomorrowHigh')
    let highFriday = document.querySelector('.fridayHigh')
    let highSaturday = document.querySelector('.saturdayHigh')
    let lowToday = document.querySelector('.todayLow')
    let lowTomorrow = document.querySelector('.tomorrowLow')
    let lowFriday = document.querySelector('.fridayLow')
    let lowSaturday = document.querySelector('.saturdayLow')
    if (highToday.innerText == '24°') {
        highToday.innerText = '75°';
        highTomorrow.innerText = '80°';
        highFriday.innerText = '69°'
        highSaturday.innerText = '78°'
        lowToday.innerText = '65°'
        lowTomorrow.innerText = '66°'
        lowFriday.innerText = '61°'
        lowSaturday.innerText = '70°'
    }
    else {
        highToday.innerText = '24°';
        highTomorrow.innerText = '27°';
        highFriday.innerText = '21°'
        highSaturday.innerText = '26°'
        lowToday.innerText = '18°'
        lowTomorrow.innerText = '19°'
        lowFriday.innerText = '16°'
        lowSaturday.innerText = '21°'
    }
}

function disappear() {
    let poof = document.querySelector('.cookieBox')
    poof.style.display = 'none'
}