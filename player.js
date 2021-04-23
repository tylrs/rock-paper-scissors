class Player {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.fighterChoice = 0;
  }

  saveWinsToStorage() {
    //checklocalstorage and reset if need be
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
    if (!numWins) {
      numWins = this.wins;
      localStorage.setItem(`${this.name}wins`, JSON.stringify(numWins));
      return;
    }
    numWins += this.wins;
    localStorage.setItem(`${this.name}wins`, JSON.stringify(numWins));
  }

  retrieveWinsFromStorage() {
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
  }

  takeTurn(userChoice, game) {
    if (this.name === "Computer") {
      var number = getRandomNumber();
      game.player2Fighter = number;
      game.currentTurn = "player1";
    } else {
        game.player1Fighter = userChoice;
        game.currentTurn = "player2";
    }
  }
}
