//DOM elements

var humanWins = document.querySelector('#humanWins');
var computerWins = document.querySelector('#computerWins');
var classicModeButton = document.querySelector('#classic');
var varationModeButton = document.querySelector('#variation')
var chooseGameView = document.querySelector('.choose-game');
var classicModeView = document.querySelector('.classic-mode');
var classicModeResults = document.querySelector('.classic-mode-results')
var headerSubtitle = document.querySelector('.title h2')
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

renderPreviousGameInfo();

// currentGame.playGame(2);

//Event Listeners
// window.addEventListener('click', runSample);
classicModeButton.addEventListener('click', showMode);
varationModeButton.addEventListener('click', showMode)
classicModeView.addEventListener('click', startGame);
changeGameButton.addEventListener('click', showChooseGameView)

//Event Handlers
// function runSample() {
//   currentGame.playGame(3);
// }

function renderPreviousGameInfo() {
  currentGame = new Game("classic");
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  displayWins(currentGame.player1.wins, currentGame.player2.wins);
}

function showMode(event) {
  var gameMode = event.target.closest('button').id;
  currentGame = new Game(gameMode);
  renderFighterSelection(gameMode);
  hide(chooseGameView);
  show(classicModeView);
  headerSubtitle.innerText = "Choose your fighter";
}

function renderFighterSelection(gameMode) {
  var fighterSelection = currentGame[gameMode];
  classicModeView.innerHTML = "";
  for (var i = 0; i < fighterSelection.length; i++) {
    classicModeView.innerHTML +=
    `
      <figure id="${fighterSelection[i].id}">
        <img src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
        <figcaption>${fighterSelection[i].figCaption}</figcaption>
      </figure>
    `
  }
}

function startGame(event) {
  if (event.target.closest('figure')) {
    var id = parseInt(event.target.closest('figure').id);
    currentGame.playGame(id);
  }
}

function showChooseGameView() {
  show(chooseGameView);
  hide(classicModeView);
  hide(changeGameButton);
  headerSubtitle.innerText = "Choose your game";
}

//Other Functions
function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max-1) + 1);
  return number;
}

function renderPlayerChoices(p1Fighter, p2Fighter, gameMode) {
  hide(classicModeView);
  show(classicModeResults);
  hide(changeGameButton);
  var fighterSelection = currentGame[gameMode];
  for (var i = 0; i < fighterSelection.length; i++) {
    if (parseInt(fighterSelection[i].id) === p1Fighter && parseInt(fighterSelection[i].id) === p2Fighter) {
      player1Choice.innerHTML +=
      `
        <figure id="${fighterSelection[i].id}">
          <img src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
          <figcaption>${fighterSelection[i].figCaption}</figcaption>
        </figure>
      `
      player2Choice.innerHTML +=
      `
        <figure id="${fighterSelection[i].id}">
          <img src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
          <figcaption>${fighterSelection[i].figCaption}</figcaption>
        </figure>
      `
    } else if (parseInt(fighterSelection[i].id) === p1Fighter) {
      player1Choice.innerHTML +=
      `
        <figure id="${fighterSelection[i].id}">
          <img src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
          <figcaption>${fighterSelection[i].figCaption}</figcaption>
        </figure>
      `
    } else if (parseInt(fighterSelection[i].id) === p2Fighter) {
      player2Choice.innerHTML +=
      `
        <figure id="${fighterSelection[i].id}">
          <img src="${fighterSelection[i].src}" alt="${fighterSelection[i].alt}">
          <figcaption>${fighterSelection[i].figCaption}</figcaption>
        </figure>
      `
    }
  }
}

// function displayFighters(p1Fighter, p2Fighter) {
//   hide(classicModeView);
//   show(classicModeResults);
//   hide(changeGameButton);
//   var figures = document.querySelectorAll('figure')
//   for (var i = 0; i < figures.length; i ++) {
//     if (parseInt(figures[i].id) === p1Fighter && parseInt(figures[i].id) === p2Fighter) {
//       player1Choice.innerHTML += figures[i].outerHTML;
//       player2Choice.innerHTML += figures[i].outerHTML;
//       // displayWinnerMessage("Draw");
//     } else if (parseInt(figures[i].id) === p1Fighter) {
//       player1Choice.innerHTML += figures[i].outerHTML;
//       // displayWinnerMessage(`${currentGame.player1.name} is the winner.`);
//     } else if (parseInt(figures[i].id) === p2Fighter) {
//       player2Choice.innerHTML += figures[i].outerHTML;
//       // displayWinnerMessage(`${currentGame.player2.name} is the winner.`);
//     }
//   }
// }


function resetResultsDOM() {
  headerSubtitle.innerText = "Choose your fighter"
  player1Choice.innerHTML = `<p>Player 1 Choice</p>`
  player2Choice.innerHTML = `<p>Player 2 Choice</p>`
  show(classicModeView);
  hide(classicModeResults);
  show(changeGameButton);
}

function displayWinnerMessage(winner) {
  if (winner !== "Draw") {
    headerSubtitle.innerText = `${winner} is the winner!`;
    return;
  }
    headerSubtitle.innerText = winner;
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
