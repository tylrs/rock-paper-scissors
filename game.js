class Game {
  constructor() {
    this.player1 = new Player("Taylor", "🤓");
    this.player2 = new Player("Computer", "📟");
    this.gameType = "classic";
    this.currentTurn = "player1";
    this.player1Fighter = 0;
    this.player2Fighter = 0;
  }

  playGame(userChoice) {
    this.updateWins();
    console.log(this.player1.wins);
    this.player1.takeTurn(userChoice, this);
    this.player2.takeTurn(userChoice, this);
    this.checkWinner();
    displayWins(this.player1.wins, this.player2.wins);
    // displayRe
    this.resetBoard();
  }

  checkWinner() {
    var p1Fighter = this.player1Fighter;
    var p2Fighter = this.player2Fighter;
    console.log("Player1>", p1Fighter, "player2>", p2Fighter)
    var result = p1Fighter - p2Fighter;
    if (!result) {
      console.log("draw");
    } else if (result === 1 || result === -2) {
      console.log("human wins")
      this.player1.wins ++;
      this.player1.saveWinsToStorage();
    } else {
      console.log("computer wins")
      this.player2.wins ++;
      this.player2.saveWinsToStorage();
    }
  }

  updateWins() {
    this.player1.retrieveWinsFromStorage();
    this.player2.retrieveWinsFromStorage();
  }

  resetBoard() {
    var timeout = setTimeout(function() {
      this.player1Fighter = 0;
      this.player2Fighter = 0;
      // return to homeview
    }, 5000);
    //showBack to choose game view
  }
}
