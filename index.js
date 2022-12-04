// -----Object ---//
let player = {
    name: "Per",
    chips: 145
}
//--- Variables declaration---- //

let cards = [] //array of cards
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = "";
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let rollNumber = Math.floor(Math.random()*13) + 1
    if(rollNumber > 10){
        return 10;
    }else if (rollNumber === 1){
        return 11
    }else{
        return rollNumber
    }
}
function startGame() {
    isAlive = true;
    let randomNum1 = getRandomCard();
    let randomNum2 = getRandomCard();
    cards= [randomNum1, randomNum2]
    sum = randomNum1 + randomNum2
    renderGame();
}

function renderGame(){
    cardsEl.textContent ="Cards :" 
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] +" " 
        }
    if(sum <=20 ){
        message ="Do you want to draw a new card?"
        sumEl.textContent = "Sum is : " + sum
    }else if(sum === 21){
        message="You've got Blackjack!"
        cardsEl.textContent ="Cards :" + firstCard +" "+ secondCard
        sumEl.textContent = "Sum is : " + sum
        hasBlackJack = true
    }else {
        message="You're out of the game!"
        sumEl.textContent = "Sum is : " + sum
        cardsEl.textContent ="Cards :" + cards
        isAlive = false
        }
        messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    let card =  getRandomCard();
    sum += card
    cards.push(card);
    renderGame();
    }
}
