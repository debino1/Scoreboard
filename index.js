let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let firstHome = 0
let firstGuest = 0

function updateScores() {
    scoreHome.textContent = firstHome;
    scoreGuest.textContent = firstGuest;
}

function plusone() {
    firstHome +=1
    updateScores()
}

function plustwo() {
    firstHome +=2
    updateScores()
}

function plusthree() {
    firstHome +=3
    updateScores()
}

function plusoneGuest() {
    firstGuest +=1
    updateScores()
}

function plustwoGuest() {
    firstGuest +=2
    updateScores()
}

function plusthreeGuest() {
    firstGuest +=3
    updateScores()
}

function resetAll() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    firstHome = 0
    firstGuest = 0
}
