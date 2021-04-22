class Player {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
    this.fighterChoice = ;
  }

  saveWinsToStorage() {
    //checklocalstorage and reset if need be
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
    numWins += this.wins;
    localStorage.setItem(`${this.name}wins`, JSON.stringify(numWins));
  }

  retrieveWinsFromStorage() {
    var numWins = JSON.parse(localStorage.getItem(`${this.name}wins`));
  }

  takeTurn(game) {
    game.currentTurn = this;
    game.numTurns ++;
  }
}
