//DOM elements

var humanWins = document.querySelector('#humanWins')
var computerWins = document.querySelector('#computerWins')


//Global Variables
var currentGame = new Game();

// currentGame.playGame(2);

//Event Listeners
window.addEventListener('click', runSample);

//Event Handlers
function runSample() {
  currentGame.playGame(3);
}

//Other Functions
function getRandomNumber() {
  var number = Math.floor(Math.random() * (4-1) + 1);
  return number;
}

function displayWins(player1Wins, player2Wins) {
  humanWins.innerText = `Wins: ${player1Wins}`;
  computerWins.innerText = `Wins: ${player2Wins}`;
}
