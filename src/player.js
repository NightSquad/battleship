class Player {
    constructor(name) {
        this.name = name;
        this._ships = []
        this._gameBoard = null;
    }
    get ships() {
        return this._ships
    }
    set ships(value) {
        return this._ships = value
        // console.log(this.name, this._ships)
    }
    get gameBoard() {
        return this._gameBoard;
    }
    
    set gameBoard(value) {
        return this._gameBoard = value
    }
}

export default Player