//DOM elements


//Global Variables
var currentGame = new Game();

currentGame.playGame(2);

//Event Listeners

//Other Functions
function getRandomNumber() {
  var number = Math.floor(Math.random() * (4-1) + 1);
  return number;
}
