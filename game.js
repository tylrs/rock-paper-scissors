class Game {
  constructor() {
    this.player1 = new Player("Taylor", "🤓");
    this.player2 = new Player("Computer", "📟");
    this.gameType = "classic";
    this.currentTurn = "player1";
    this.numTurns = 0;
  }

  playGame(userChoice) {
    this.player1.takeTurn(userChoice, this);
    this.player2.takeTurn(userChoice, this);
    this.checkWinner();
    // resetBoard();
  }

  checkWinner() {
    var p1Fighter = this.player1.fighterChoice;
    var p2Fighter = this.player2.fighterChoice;
    console.log("Player1>", p1Fighter, "player2>", p2Fighter)
    var result = p1Fighter - p2Fighter;
    if (!result) {
      console.log("draw");
    } else if (result === 1 || result === -2) {
      console.log("player1 wins")
      this.player1.wins ++;
    } else {
      console.log("player2 wins")
      this.player2.wins ++;
    }
  }

  resetBoard() {

  }
}
