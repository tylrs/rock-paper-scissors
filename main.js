//DOM elements

var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
var classicModeButton = document.querySelector('#classicModeButton');
var chooseGameView = document.querySelector('.choose-game');
var classicModeView = document.querySelector('.classic-mode');
var classicModeSubtitle = document.querySelector('.title h2')


//Global Variables
var currentGame;

// currentGame.playGame(2);

//Event Listeners
// window.addEventListener('click', runSample);
classicModeButton.addEventListener('click', showMode);
classicModeView.addEventListener('click', startGame);

//Event Handlers
// function runSample() {
//   currentGame.playGame(3);
// }

function showMode() {
  currentGame = new Game();
  hide(chooseGameView);
  show(classicModeView);
  classicModeSubtitle.innerText = "Choose your fighter"
}

function startGame(event) {
  if (event.target.closest('figure')) {
    var id = parseInt(event.target.closest('figure').id);
    currentGame.playGame(id);
  }
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

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
