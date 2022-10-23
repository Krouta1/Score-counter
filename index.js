//Time
let updtTime = document.getElementById("game-time")
let countTime = 60

// Home score adding
let updtHome = document.getElementById("home-score")
let countHome = 0

function homeAddOne(){
   countHome += 1
   updtHome.textContent = countHome
   countTime -= 1
   updtTime.textContent = countTime
}
function homeAddTwo(){
   countHome += 2
   updtHome.textContent = countHome
   countTime -= 1
   updtTime.textContent = countTime
}
function homeAddThree(){
   countHome += 3
   updtHome.textContent = countHome
   countTime -= 1
   updtTime.textContent = countTime
}

// Guest score adding
let updtGuest = document.getElementById("guest-score")
let countGuest = 0

function guestAddOne(){
   countGuest += 1
   updtGuest.textContent = countGuest
   countTime -= 1
   updtTime.textContent = countTime
}
function guestAddTwo(){
   countGuest += 2
   updtGuest.textContent = countGuest
   countTime -= 1
   updtTime.textContent = countTime
}
function guestAddThree(){
   countGuest += 3
   updtGuest.textContent = countGuest
   countTime -= 1
   updtTime.textContent = countTime
}

//New game click
function newGame(){
    countHome = 0
    updtHome.textContent = countHome
    countGuest = 0
    updtGuest.textContent = countGuest
    countTime = 60
    updtTime.textContent = countTime
}