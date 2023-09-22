/*
let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard + 6;
//console.log(sum);

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack!");
} else (sum > 21) {
    console.log("You're out of the game!");
}
*/

// If...else statement practise
/*
let age = 20;

if (age < 21) {
    console.log("You cannot enter the club!");
} else {
    console.log("Welcome!");
}
*/

//
/*
let age = 101;

if (age < 100) {
    console.log("Not eligible");
} else if (age === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not eligible, you have already gotten one");
}
*/




// New Blackjack logic
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//let sumEl = document.querySelector("#sum-el");

let player = {
    name: "Roy",
    chips: 145
}

//let playerName = "Roy";
//let playerChips = 145

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//console.log(cards);

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " //+ cards[0] + " " + cards[1];
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; 
    }
    
    
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    
    //console.log(hasBlackJack);
    //console.log(isAlive);
    //console.log(message);
}

function newCard() {
    //console.log("Drawing a new card from the deck!");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        //console.log(cards);
        renderGame();
    }
}




