class Game {
  constructor() {
    this.player1 = new Player("Taylor", "🤓");
    this.player2 = new Player("Computer", "📟");
    this.gameType = "classic";
    this.currentTurn = player1;
    this.numTurns = 0;
    this.player1Fighter = ;
    this.player2Fighter = ;
  }

  checkWinner() {
    var p1Fighter = this.player1.fighterChoice;
    var p2Fighter = this.player2.fighterChoice;
    var result = p1Fighter - p2Fighter;
    if (!result) {
      console.log("draw");
    } else if (result === 1 || result === -2) {
      console.log("player1 wins")
    } else {
      console.log("player2 wins")
    }
  }
}
