class Player {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.wins = 0;
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

  takeTurn(fighterChoice) {
    
  }
}
