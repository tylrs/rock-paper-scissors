//DOM elements
var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
var player2Info = document.querySelector('.player2-info')
var player1Info = document.querySelector('.player1-info')
var chooseGameView = document.querySelector('.choose-game');
var gameBoardView = document.querySelector('.game-board');
var gameBoardResults = document.querySelector('.game-board-results')
var headerSubtitle = document.querySelector('.title h2')
var figures = document.querySelectorAll('figure');
var player1Choice = document.querySelector('#p1-choice');
var player2Choice = document.querySelector('#p2-choice');
var changeGameButton = document.querySelector('#changeGame');

//Global Variables
var currentGame;

//Event Listeners
window.addEventListener('DOMContentLoaded', renderPreviousGameInfo)
chooseGameView.addEventListener('click', showMode);
gameBoardView.addEventListener('click', runGame);
changeGameButton.addEventListener('click', showChooseGameView);

function renderPreviousGameInfo() {
  currentGame = new Game("classic");
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  renderPlayerInfo();
  displayWins(currentGame.player1.wins, currentGame.player2.wins);
}

function showMode(event) {
  if (event.target.closest('button')) {
    var gameMode = event.target.closest('button').id;
    currentGame = new Game(gameMode);
    renderFighterSelection(gameMode);
    hide(chooseGameView);
    show(gameBoardView);
    headerSubtitle.innerText = "Choose your fighter";
  }
}

function runGame(event) {
  if (event.target.closest('figure')) {
    var id = parseInt(event.target.closest('figure').id);
    currentGame.playGame(id);
    displayGame();
  }
}

function showChooseGameView() {
  show(chooseGameView);
  hide(gameBoardView);
  hide(changeGameButton);
  headerSubtitle.innerText = "Unlock your potential";
}

//Other Functions
function displayGame() {
  renderPlayerChoices(currentGame.player1Fighter, currentGame.player2Fighter, currentGame.gameType);
  displayWinnerMessage(currentGame.winner, currentGame.player1.emoji, currentGame.player2.emoji);
  displayWins(currentGame.player1.wins, currentGame.player2.wins);
  resetResultsDOM();
  currentGame.resetBoard();
}

function renderPlayerInfo() {
  player1Info.innerHTML =
  `
    <p class="emoji">${currentGame.player1.emoji}</p>
    <h2>${currentGame.player1.name}</h2>
    <h4 id="humanWins">Wins: ${currentGame.player1.wins}</h4>
  `
  player2Info.innerHTML =
  `
    <p class="emoji">${currentGame.player2.emoji}</p>
    <h2>${currentGame.player2.name}</h2>
    <h4 id="computerWins">Wins: ${currentGame.player2.wins}</h4>
  `
}

function renderFighterSelection(gameMode) {
  var fighterSelection = currentGame[gameMode];
  gameBoardView.innerHTML = "";
  for (var i = 0; i < fighterSelection.length; i++) {
    gameBoardView.innerHTML +=
    `
      <figure id="${fighterSelection[i].id}">
        <img class="fighter" src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
        <figcaption>${fighterSelection[i].figCaption}</figcaption>
      </figure>
    `
  }
}

function renderPlayerChoices(p1Fighter, p2Fighter, gameMode) {
  hide(gameBoardView);
  show(gameBoardResults);
  hide(changeGameButton);
  var fighterSelection = currentGame[gameMode];
  for (var i = 0; i < fighterSelection.length; i++) {
    var renderedFighter =
    `
      <figure id="${fighterSelection[i].id}">
        <img class="fighter" src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
        <figcaption>${fighterSelection[i].figCaption}</figcaption>
      </figure>
    `
    if (parseInt(fighterSelection[i].id) === p1Fighter && parseInt(fighterSelection[i].id) === p2Fighter) {
      player1Choice.innerHTML += renderedFighter;
      player2Choice.innerHTML += renderedFighter;
    } else if (parseInt(fighterSelection[i].id) === p1Fighter) {
      player1Choice.innerHTML += renderedFighter;
    } else if (parseInt(fighterSelection[i].id) === p2Fighter) {
      player2Choice.innerHTML += renderedFighter;
    }
  }
}

function resetResultsDOM() {
  var timeout = setTimeout(function() {
    headerSubtitle.innerText = "Choose your fighter"
    player1Choice.innerHTML = `<p>Your Choice</p>`
    player2Choice.innerHTML = `<p>Computer Choice</p>`
    show(gameBoardView);
    hide(gameBoardResults);
    show(changeGameButton);
  }, 3000);
}

function displayWinnerMessage(winner, p1Emoji, p2Emoji) {
  if (winner === "You") {
    headerSubtitle.innerText = `${p1Emoji}${winner} are the winner!${p1Emoji}`;
  } else if (winner !== "Draw") {
    headerSubtitle.innerText = `${p2Emoji}${winner} is the winner!${p2Emoji}`;
  } else {
    headerSubtitle.innerText = winner;
  }
}

function displayWins(player1Wins, player2Wins) {
  humanWins = document.querySelector('#humanWins');
  computerWins = document.querySelector('#computerWins');
  humanWins.innerText = `Wins: ${player1Wins}`;
  computerWins.innerText = `Wins: ${player2Wins}`;
}

function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max-1) + 1);
  return number;
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
