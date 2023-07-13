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

//away
let awayScore = 0
let awayScoreTracker = document.getElementById("score-away")


// away Score Button +1   
let awayBtnOne = document.getElementById("away-button-1")

function increaseawayOne() {
    awayScore += 1
    awayScoreTracker.textContent = awayScore
}


// away Score Button +2
let awayBtnTwo = document.getElementById("away-button-2")

function increaseawayTwo() {
    awayScore += 2
    awayScoreTracker.textContent = awayScore
}


// away Score Button +3
let awayBtnThree = document.getElementById("away-button-3")

function increaseawayThree() {
    awayScore += 3
    awayScoreTracker.textContent = awayScore
}


// Reset Button

let newGame = document.getElementById("newGame")

function resetScores() {
    awayScore = 0
    awayScoreTracker.textContent = awayScore
    homeScore = 0
    homeScoreTracker.textContent = homeScore
    
    
}

let button = document.getElementById("resetbtn");
button.click();


