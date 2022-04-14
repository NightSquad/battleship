import Player from './player'
import { renderBoard, autoPrepare, player, renderAllShips, random} from './prepare';
import {gameBoard} from './gameBoard'

let currentPlayer = 0;
let enemyPlayer = 1;

let computer = new Player('computer');

let players = []

computer.gameBoard = new gameBoard(document.getElementsByClassName('playerBoard')[1])

function startGame(){
    players.push(player, computer)
    document.getElementsByClassName('gameBoard')[1].style.display = 'flex'
    let playerBoard = computer.gameBoard.board
    renderBoard(playerBoard)
    autoPrepare(computer);
    let button
    for (let i=0; i<10; i++) {
        for (let j = 0; j<10; j++) {
            button = playerBoard.childNodes[i].childNodes[j];
            button.addEventListener('click', function(e) {  
                if (currentPlayer != 0) return
                if (computer.gameBoard.checked.some(el => {
                    return JSON.stringify(el) == JSON.stringify([i, j])})) {
                    return
                } else {
                    computer.gameBoard.checked.push([i,j])
                }
                if (!computer.gameBoard.receiveAttack(e, computer, i, j)) {
                    // computer.gameBoard.checked.push([i,j])
                    switchPlayer()
                    computerAttack()
                }
            })
        }
    }
}

function restartGame() {
    for (let i=0; i<players.length; i++) {
        players[i].gameBoard.checked = [];
        players[i].ships = [];
        players[i].sunks = [];
        autoPrepare(players[i])
        for (let j=0; j<10; j++) {
            for (let k = 0; k<10; k++) {
                players[i].gameBoard.board.childNodes[j].childNodes[k].style.background = 'none'
            }
        }
    }
    renderAllShips(player, player.gameBoard.board)
}

function renderWin(player){
    let win = document.createElement('div');
    win.className = 'win';
    win.addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none'
    })

    let winnerBox = document.createElement('div');
    winnerBox.className = 'winnerBox';

    let p = document.createElement('p');
    p.className = 'winner';
    p.textContent = `Победил ${player.name}`;


    let chooseDiv = document.createElement('div');
    chooseDiv.className = 'choosePrepare'

    let restartButton = document.createElement('button');
    restartButton.className = 'chooseButton'
    restartButton.textContent = 'Restart';

    let closeButton = document.createElement('button');
    closeButton.className = 'chooseButton';
    closeButton.textContent = 'Close';

    restartButton.addEventListener('click', restartGame);
    closeButton.addEventListener('click', (e) => {
        for (let i=0; i<10; i++) {
            for (let j=0; j<10; j++) {
                computer.gameBoard.board.childNodes[i].childNodes[j].disabled = 'true'
            }
        }
        win.remove()
    })

    chooseDiv.append(restartButton, closeButton)
    winnerBox.append(p, chooseDiv);
    win.append(winnerBox)

    document.body.append(win)
}

function computerAttack() {
    let x = random(10);
    let y = random(10)
    if (player.gameBoard.checked.some(el => {
        return JSON.stringify(el) == JSON.stringify([x, y]);
    })) {
        return computerAttack()  
    }
    console.log(`Компьютер сходил в точку ${x}:${y}`)
    if (player.gameBoard.receiveAttack('_', player, x, y)) {
        computerAttack()
    } else { 
    player.gameBoard.checked.push([x, y])
    player.gameBoard.board.childNodes[x].childNodes[y].style.backgroundColor = 'black';
    switchPlayer()
    return
    }
}

function checkWin() {
    if (players[enemyPlayer].sunks.length == 10) {
        return true
    }
    return false
}

function switchPlayer() {
    if (currentPlayer == 0) {
        currentPlayer = 1;
        enemyPlayer = 0;
        return
    }
    currentPlayer = 0;
    enemyPlayer = 1;
}

export {startGame, players, currentPlayer, checkWin, enemyPlayer, renderWin}