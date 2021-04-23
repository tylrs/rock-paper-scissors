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
