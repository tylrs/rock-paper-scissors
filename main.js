//DOM elements

var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
var classicModeButton = document.querySelector('#classicModeButton');
var chooseGameView = document.querySelector('.choose-game');
var classicModeView = document.querySelector('.classic-mode');

//Global Variables
var currentGame = new Game();

// currentGame.playGame(2);

//Event Listeners
// window.addEventListener('click', runSample);
classicModeButton.addEventListener('click', showMode);

//Event Handlers
function runSample() {
  currentGame.playGame(3);
}

function showMode() {
  hide(chooseGameView);
  show(classicModeView);
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
