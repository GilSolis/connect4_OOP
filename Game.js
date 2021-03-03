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
    startGame() {

    }
}