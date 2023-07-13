//home
let homeScore = 0
let homeScoreTracker = document.getElementById("score-home")

// Home Score Button +1
let homeBtnOne = document.getElementById("home-button-1")

function increaseHomeOne() {
    homeScore += 1
    homeScoreTracker.textContent = homeScore
}

// Home Score Button +2
let homeBtnTwo = document.getElementById("home-button-2")

function increaseHomeTwo() {
    homeScore += 2
    homeScoreTracker.textContent = homeScore 
}

// Home Score Button +3
let homeBtnThree = document.getElementById("home-button-3")

function increaseHomeThree() {
    homeScore += 3
    homeScoreTracker.textContent = homeScore
}

//guest
let guestScore = 0
let guestScoreTracker = document.getElementById("score-guest")


// Guest Score Button +1   
let guestBtnOne = document.getElementById("guest-button-1")

function increaseGuestOne() {
    guestScore += 1
    guestScoreTracker.textContent = guestScore
}


// Guest Score Button +2
let guestBtnTwo = document.getElementById("guest-button-2")

function increaseGuestTwo() {
    guestScore += 2
    guestScoreTracker.textContent = guestScore
}


// Guest Score Button +3
let guestBtnThree = document.getElementById("guest-button-3")

function increaseGuestThree() {
    guestScore += 3
    guestScoreTracker.textContent = guestScore
}


// Reset Button

let newGame = document.getElementById("newGame")

function resetScores() {
    guestScore = 0
    guestScoreTracker.textContent = guestScore
    homeScore = 0
    homeScoreTracker.textContent = homeScore
    
    
}

let button = document.getElementById("resetbtn");
button.click();


