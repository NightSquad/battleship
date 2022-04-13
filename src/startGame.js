import Player from './player'
import { renderBoard, autoPrepare, player, renderAllShips, random} from './prepare';
import {gameBoard} from './gameBoard'

let currentPlayer = 0;

let computer = new Player('computer');

let players = []

computer.gameBoard = new gameBoard(document.getElementsByClassName('playerBoard')[1])

function startGame(){
    players.push(player, computer)
    document.getElementsByClassName('gameBoard')[1].style.display = 'flex'
    let playerBoard = computer.gameBoard.board
    renderBoard(playerBoard)
    autoPrepare(computer);
    renderAllShips(computer, playerBoard)
    let button
    for (let i=0; i<10; i++) {
        for (let j = 0; j<10; j++) {
            button = playerBoard.childNodes[i].childNodes[j];
            button.addEventListener('click', function(e) {  
                if (currentPlayer != 0) return
                if (!computer.gameBoard.receiveAttack(e, computer, i, j)) {
                    computerAttack()
                    switchPlayer()
                    console.log(players[currentPlayer].gameBoard)
                }
            })
        }
    }
}

function computerAttack() {
    console.log('Ходит компьютер')
    let x = random(10);
    let y = random(10)
    if (player.gameBoard.receiveAttack('_', player, x, y)) {
        console.log('Компьютер попал')
        computerAttack()
    } else { 
    console.log(player.gameBoard.board.childNodes[x].childNodes[y])
    player.gameBoard.board.childNodes[x].childNodes[y].style.backgroundColor = 'black';

    switchPlayer()
    return
    }
}

function switchPlayer() {
    if (currentPlayer == 0) {
        currentPlayer = 1;
    } else currentPlayer = 0
}

export {startGame, players, currentPlayer}