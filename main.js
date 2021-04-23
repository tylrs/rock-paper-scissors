//DOM elements
window.addEventListener('click', runSample);

//Global Variables
var currentGame = new Game();

// currentGame.playGame(2);

//Event Listeners
function runSample() {
  currentGame.playGame(3);
}

//Other Functions
function getRandomNumber() {
  var number = Math.floor(Math.random() * (4-1) + 1);
  return number;
}

//user clicks game type for first time
//gameClass is created
//previous wins are retrieved from storage from each player class
//checks if there are labeled wins
//if not creates them and saves them in local storage
//if there are labeled wins then this.wins is reassigned to the stored wins

 // this.wins
 // storage wins

 //this.wins = 0
 //storage wins = 0

//user plays game and wins
//this.wins = 1
//save to storage
//storage wins = 1

//user plays game again and wins
//this.wins = 2
//storage wins =
