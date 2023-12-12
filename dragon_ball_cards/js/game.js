/*
* JS DRAGON BALL CARD GAME
*
*/
// Global variables
var cardSetHard = ["android17", "beerus", "bulma", "buu", "buu2", "buu3", "cell", "cell2", "chichi", "frieza", "frieza2", "frieza3", "frieza4", "gohan", "gohan2", "goku", "goku2", "goku3", "goku4", "gotenks", "kaio", "krillin", "krillin2", "krillin3", "pan", "pan2", "piccolo", "pilaf", "raditz", "roshi", "satan", "shinhan", "vegeta", "vegeta2", "vegeta3", "vegeta4", "yajirobe", "yamcha"];
var cardSetNormal = ["android17", "beerus", "bulma", "buu", "cell", "chichi", "frieza", "gohan", "goku", "gotenks", "kaio", "krillin", "pan", "piccolo", "pilaf", "raditz", "roshi", "satan", "shinhan", "vegeta", "yajirobe", "yamcha"];
var cardSetEasy = ["bulma", "buu", "cell", "frieza", "gohan", "goku", "krillin", "pan", "piccolo", "pilaf", "roshi", "satan", "shinhan", "vegeta", "yamcha"];
var currentCardSet = []; 
var firstCard = null;
var secondCard = null;
var idInterval;

/**
 * Returns a random number between 0 and max
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param  {} max
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Shuffles the received array and returns it
 * 
 */
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


 /**
 * Timer function
 */
function gameCountdown(){
    let timeLeft = parseInt(document.getElementById("timer").value) - 1;
    document.getElementById("timer").value = timeLeft;
    switch(timeLeft){
        case 0:
            clearInterval(idInterval);
            // End game
            const cards = document.getElementsByClassName('card');
            for (let card of cards) {
                card.removeEventListener('click',flipCard);
            }
            window.alert("Has perdido!!!");
            //Cambiar z-index paneles
            /*document.getElementById("juegoAcabado").classList.add('juegoAcabadoColor');
            document.getElementById("juegoAcabado").style.zIndex="2";
            document.getElementById("juego").style.zIndex="1";
            document.getElementById("nuevaPartida").addEventListener("click",(e)=>location.reload());*/
            break;
        case 10:
            document.getElementById("timer").style.backgroundColor = "red";
            document.getElementById("timer").style.color = "white";
            break;
    }
}

/**
 * Fills header data
 */
function setHeaderInfo(){
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg;
    document.getElementById("level").value = level;
    document.getElementById("pairsLeft").value = parseInt(cards) / 2;
    document.getElementById("timer").value = parseInt(cards) * 2,5;   // Timer depends on number of cards
}

/**
 * Initializes game area with a card set depending on the level
 */

function setCards(){
    document.getElementById("game").style.gridTemplateColumns="repeat("+ parseInt(cards) / 4 +", 1fr)";
    document.getElementById("game").style.gridTemplateRows="repeat(4, 1fr)";
    // Creates cardSet
    let items = "";
    let baseCardSet = [];
    // Chooses cardSet depending on the level
    switch(level){
        case "1":
            baseCardSet = cardSetEasy;
            break;
        case "2":
            baseCardSet = cardSetNormal;
            break;
        case "3":
            baseCardSet = cardSetHard;
            break;
    }
    for (let index = 0; index < (parseInt(cards) / 2); index++) {  
        let randomCard = getRandomInt(baseCardSet.length - 1);  // Gets random card from card set
        console.log(baseCardSet[index]);
        currentCardSet.push(baseCardSet[randomCard]); // Adds the random card to the card set twice
        currentCardSet.push(baseCardSet[randomCard]);
        baseCardSet.splice(randomCard, 1);  // Deletes the card from the base card set, so that it can only be added once        
    }
    currentCardSet = shuffleArray(currentCardSet); //Shuffles te cards in current card set
    for (let card of currentCardSet){
        items += `<div class="card ${card}" style="background-image: url('img/cards/${card}.png')"></div>`;
    }
    document.getElementById("game").innerHTML = items;
}

function hideAllCards(){
    let cards = document.getElementsByClassName('card');
    for (let card of cards){
        hideCard(card);
    }    
    startGame();
}

function showCard(card){
    let className = card.classList[card.classList.length - 1];      //Gets the last class name, that matches the image name
    card.style.backgroundImage = `url('img/cards/${className}.png')`;
}

function hideCard(card){
    card.style.backgroundImage = 'url("img/card-bg.jpg")';
}

function flipCard(event){
    if(firstCard == null){  // If there's no firstCard, it saves it
        firstCard = event.target;
        if (firstCard.style.backgroundImage == 'url("img/card-bg.jpg")'){        // Only flips the first card if it's not visible already
            showCard(firstCard);
        }
    }else{
        secondCard = event.target;
        if(secondCard.style.backgroundImage == 'url("img/card-bg.jpg")'){       // Only flips the second card if it's not visible already
           showCard(secondCard);
            if(firstCard.classList[firstCard.classList.length - 1] == secondCard.classList[firstCard.classList.length - 1]){   // If the pair of cards match (same class)
                firstCard.removeEventListener('click',flipCard);    // The matching cards are not clickable anymore
                secondCard.removeEventListener('click',flipCard);
                document.getElementById("pairsLeft").value = document.getElementById("pairsLeft").value - 1;
                if(document.getElementById("pairsLeft").value == 0){    // If all cards are matched, user wins
                    window.alert("HAS GANADO!!!!");
                }
            }
            else{
                hideCard(firstCard);     // If the pair of cards don't match (different class), hides them again
                hideCard(secondCard);
            }
            firstCard = null;   // After the second click, initializes first and second card
            secondCard = null;
        }
    } 
}

function startGame(){
    idInterval=setInterval(gameCountdown,1000);   // Starts timer
    let cards = document.getElementsByClassName('card');
    for (let card of cards){
        card.addEventListener('click',flipCard);
    }
}

/*
* MAIN
*/

// Get user data
getUserData();

// Check user data
if(!checkUserData()) location="index.html";

// Start game
setHeaderInfo();
setCards();
setTimeout(hideAllCards,6000/level);  // Time to hide cards depends on level