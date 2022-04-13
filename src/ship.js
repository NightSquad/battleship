import { players, currentPlayer } from "./startGame";

class Ship {
    constructor() {
        this.coord = []
        this.Board = null;
        this.type = null;
    }
    hit = (e) => {
        let num, char
        if(e.currentTarget) {
            num = parseInt(e.currentTarget.dataset.num, 10);
            char = parseInt(e.currentTarget.dataset.char, 10);
            this.Board = e.currentTarget.parentElement.parentElement;
        } else {
            num = e[0];
            char = e[1];
            this.Board = players[currentPlayer].gameBoard.board;
        }

        if (this.Board.childNodes[num-1]) {
            if (this.Board.childNodes[num-1].childNodes[char-1]) this.Board.childNodes[num-1].childNodes[char-1].style.backgroundColor = 'black';
            if (this.Board.childNodes[num-1].childNodes[char+1]) this.Board.childNodes[num-1].childNodes[char+1].style.backgroundColor = 'black';
        }
        if (this.Board.childNodes[num+1]) {
            if (this.Board.childNodes[num+1].childNodes[char-1]) this.Board.childNodes[num+1].childNodes[char-1].style.backgroundColor = 'black';
            if (this.Board.childNodes[num+1].childNodes[char+1]) this.Board.childNodes[num+1].childNodes[char+1].style.backgroundColor = 'black';
        }
        this.Board.childNodes[num].childNodes[char].style.backgroundColor = 'red'
    }
    isSunk = () => {
        let sum = 0;
        for (let i=0; i<this.coord.length; i++) {
            if (this.Board.childNodes[this.coord[i][0]].childNodes[this.coord[i][1]].style.backgroundColor == 'red') {
                sum++;
            }
        }
        if (sum == this.coord.length) {
            return true
        } return false
    }
}

export {Ship}