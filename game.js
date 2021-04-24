class Game {
  constructor() {
    this.player1 = new Player("Taylor", "🤓");
    this.player2 = new Player("Computer", "📟");
    this.gameType = "classic";
    this.currentTurn = "player1";
    this.player1Fighter = 0;
    this.player2Fighter = 0;
    this.winner = "";
  }

  playGame(userChoice) {
    this.updateWins();
    console.log(this.player1.wins);
    this.player1.takeTurn(userChoice, this);
    this.player2.takeTurn(userChoice, this);
    this.checkWinner();
    displayFighters(this.player1Fighter, this.player2Fighter);
    displayWinnerMessage(this.winner);
    console.log(`p1wins> ${this.player1.wins}`, `p2wins> ${this.player2.wins}`);
    displayWins(this.player1.wins, this.player2.wins);

    this.resetBoard();
  }

  checkWinner() {
    var p1Fighter = this.player1Fighter;
    var p2Fighter = this.player2Fighter;
    console.log("Player1>", p1Fighter, "player2>", p2Fighter)
    var result = p1Fighter - p2Fighter;
    if (!result) {
      console.log("draw");
      this.winner = "Draw";
    } else if (result === 1 || result === -2) {
      console.log("human wins")
      this.winner = this.player1.name;
      this.player1.wins ++;
      // console.log(this.player1.wins);
      this.player1.saveWinsToStorage();
    } else {
      console.log("computer wins")
      this.winner = this.player2.name;
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
      resetDOM();
      show(classicModeView);
      hide(classicModeResults);
      show(changeGameButton);
    }, 5000);
    //showBack to choose game view
  }
}
