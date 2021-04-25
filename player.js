class Player {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.fighterChoice = 0;
  }

  saveWinsToStorage() {
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
    numWins = this.wins;
    localStorage.setItem(`${this.name}wins`, JSON.stringify(numWins));
  }

  retrieveWinsFromStorage() {
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
    if (!numWins) {
      numWins = 0;
      localStorage.setItem(`${this.name}wins`, JSON.stringify(numWins));
      return;
    }
    this.wins = numWins;
  }

  takeTurn(userChoice, gameTypeNum) {
    if (this.name === "Computer") {
      var number = getRandomNumber(gameTypeNum);
      game.player2Fighter = number;
      game.currentTurn = "player1";
    } else {
        game.player1Fighter = userChoice;
        game.currentTurn = "player2";
    }
  }
}
