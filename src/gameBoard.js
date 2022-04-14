import { checkWin, currentPlayer, players, renderWin } from "./startGame"

class gameBoard{
    constructor(thisBoard) {
        this.board = thisBoard
        this.checked = [];
    }
    receiveAttack(event, player, x, y) {
        return player.ships.some(element => {
            return element.coord.some(el => {
                if(JSON.stringify(el) == JSON.stringify([x, y])) {
                    this.checked.push([x,y])
                    if (event.currentTarget) {
                        element.hit(event)                    
                    } else element.hit([x,y])
                    if (element.isSunk()) {
                        element.coord.forEach(elem => {
                            this.board.childNodes[elem[0]].childNodes[elem[1]].style.backgroundColor = 'orange'
                        })
                        player.sunks.push(element)
                        if (checkWin()) renderWin(players[currentPlayer])
                        if (element.coord.length == 1) {
                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1].style.backgroundColor = 'black';
                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]+1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]+1].style.backgroundColor = 'black';
                            if (this.board.childNodes[element.coord[0][0]+1]) this.board.childNodes[element.coord[0][0]+1].childNodes[element.coord[0][1]].style.backgroundColor = 'black';
                            if (this.board.childNodes[element.coord[0][0]-1]) this.board.childNodes[element.coord[0][0]-1].childNodes[element.coord[0][1]].style.backgroundColor = 'black';
                            this.checked.push([element.coord[0][0], element.coord[0][1]-1], [element.coord[0][0], element.coord[0][1]+1], [element.coord[0][0]+1, element.coord[0][1]], [element.coord[0][0]-1, element.coord[0][1]])
                            return true
                    }
                        if (element.type == 'Vertical') {
                            if (this.board.childNodes[element.coord[0][0]-1]) this.board.childNodes[element.coord[0][0]-1].childNodes[element.coord[0][1]].style.backgroundColor = 'black'
                            if (this.board.childNodes[element.coord[element.coord.length-1][0]+1]) this.board.childNodes[element.coord[element.coord.length-1][0]+1].childNodes[element.coord[element.coord.length-1][1]].style.backgroundColor = 'black'
                            this.checked.push([element.coord[0][0]-1, element.coord[0][1]], [element.coord[element.coord.length-1][0]+1, element.coord[element.coord.length-1][1]])
                        }
                        if (element.type == 'Horizontal') {
                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[element.coord.length - 1][1]+1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[element.coord.length - 1][1]+1].style.backgroundColor = 'black'
                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1].style.backgroundColor = 'black'
                            this.checked.push([element.coord[0][0], element.coord[element.coord.length - 1][1]+1], [element.coord[0][0], element.coord[0][1]-1])
                        }
                    }
                    return true
                } 
                this.board.childNodes[x].childNodes[y].style.backgroundColor = 'black'
            })
        })
    }
}

export {gameBoard}