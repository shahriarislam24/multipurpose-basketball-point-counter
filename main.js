document.getElementById("home-counter").textContent = 0
document.getElementById("guest-counter").textContent = 0
let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")

let count = 0 
let number = 0

function counterPlusOne () {
  count += 1
  homeCounter.textContent = count
}

function numberPlusOne () {
  number += 1
  guestCounter.textContent = number
}

function counterPlusTwo () {
  count += 2
  homeCounter.textContent = count
}

function numberPlusTwo () {
  number += 2
  guestCounter.textContent = number
}

function counterPlusThree() {
  count += 3
  homeCounter.textContent = count
}

function numberPlusThree () {
  number += 3
  guestCounter.textContent = number
}

function resetCount () {
  homeCounter.textContent = 0
  count = 0
}

function resetNumber () {
  guestCounter.textContent = 0
  number = 0
}