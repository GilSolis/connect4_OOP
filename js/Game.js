class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    createPlayers() {
        const players = [new Player('Player 1', 1, '#05fc11', true),
        new Player('Player 2', 2, '#fc02b1')];
        return players
    }
    //gets game ready for play


    get activePlayer() {
        return this.players.find(player => player.active)
    }
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true
    }

    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                //move left
            } else if (e.key === "ArrowRight") {
                //move right
            } else if (e.key === "ArrowDown") {
                //drop token
            }
        }
    }

}