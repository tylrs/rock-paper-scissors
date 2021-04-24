//DOM elements

var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
var classicModeButton = document.querySelector('#classicModeButton');
var chooseGameView = document.querySelector('.choose-game');
var classicModeView = document.querySelector('.classic-mode');
var classicModeResults = document.querySelector('.classic-mode-results')
var classicModeSubtitle = document.querySelector('.title h2')
var figures = document.querySelectorAll('figure');

var player1Choice = document.querySelector('#p1-choice');
var player2Choice = document.querySelector('#p2-choice');

var changeGameButton = document.querySelector('#changeGame');

//MESS AROUND
// console.log(figures)
// console.log(figures[0]);
// classicModeResults.innerHTML = figures[0].innerHTML;


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
  classicModeSubtitle.innerText = "Choose your fighter";
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

function displayFighters(p1Fighter, p2Fighter) {
  hide(classicModeView);
  show(classicModeResults);
  for (var i = 0; i < figures.length; i ++) {
    if (parseInt(figures[i].id) === p1Fighter && parseInt(figures[i].id) === p2Fighter) {
      player1Choice.innerHTML += figures[i].outerHTML;
      player2Choice.innerHTML += figures[i].outerHTML;
      // displayWinnerMessage("Draw");
    } else if (parseInt(figures[i].id) === p1Fighter) {
      player1Choice.innerHTML += figures[i].outerHTML;
      // displayWinnerMessage(`${currentGame.player1.name} is the winner.`);
    } else if (parseInt(figures[i].id) === p2Fighter) {
      player2Choice.innerHTML += figures[i].outerHTML;
      // displayWinnerMessage(`${currentGame.player2.name} is the winner.`);
    }
  }
}

function resetDOM() {
  classicModeSubtitle.innerText = "Choose your fighter"
  player1Choice.innerHTML = `<p>Player 1 Choice</p>`
  player2Choice.innerHTML = `<p>Player 2 Choice</p>`
}

function displayWinnerMessage(winner) {
  if (winner !== "Draw") {
    classicModeSubtitle.innerText = `${winner} is the winner!`;
    return;
  }
    classicModeSubtitle.innerText = winner;
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
