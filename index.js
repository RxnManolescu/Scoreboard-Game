
const homeCountEl = document.getElementById("home-count")
const homeIncrementOneEl = document.getElementById("home-increment-one")
const homeIncrementTwoEl = document.getElementById("home-increment-two")
const homeIncrementThreeEl = document.getElementById("home-increment-three")

const guestCountEl = document.getElementById("guest-count")
const guestIncrementOneEl = document.getElementById("guest-increment-one")
const guestIncrementTwoEl = document.getElementById("guest-increment-two")
const guestIncrementThreeEl = document.getElementById("guest-increment-three")


let homeCount = 0

function homeIncrementByOne() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function homeIncrementByTwo() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function homeIncrementByThree() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

let guestCount = 0

function guestIncrementByOne() {
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function guestIncrementByTwo() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function guestIncrementByThree() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}

function newGame() {
    homeCount = 0
    homeCountEl.textContent = homeCount
    
    guestCount = 0
    guestCountEl.textContent = guestCount
}