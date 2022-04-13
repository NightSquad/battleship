import {notify} from './notify/notify.js'
import Player from './player'
import { startGame } from './startGame.js';
import { Ship } from './ship.js';
import { gameBoard } from './gameBoard.js';

const notification = new notify;

let playerBoard = document.getElementsByClassName('playerBoard')[0];
let gameTable = document.getElementsByClassName('gameBoard')[0];

let player = new Player('Player')
player.gameBoard = new gameBoard(playerBoard)

let shipsClassification= {
    0: addShipHorizontal,
    1: addShipVertical
}

let rules = [4, 3, 2, 1] // кол-во кораблей. 4 однопалубных, 3 двухпалубных и т.д.

let ships = [];

function createShip(size) {
    let submarine = document.createElement('div');
    submarine.className = 'submarine';
    submarine.draggable = 'true';
    for (let i=0; i<size; i++) {
        let button = document.createElement('button');
        submarine.append(button)
    }
    submarine.style.height = 25*size + 'px'
    submarine.addEventListener('dragstart', dragstart_handler)
    submarine.addEventListener('dblclick', (e) => {
        e.currentTarget.classList.toggle('horizontal')
        if (e.currentTarget.classList[1] == 'horizontal') e.currentTarget.style.height = ''
        if (!e.currentTarget.classList[1]) e.currentTarget.style.height = 25*size + 'px'
    })
    return submarine
}

function renderBoard(table) {
    for (let i=0; i < 10; i++) {
        let line = document.createElement('div');
        line.className = 'line'
        line.id = i
        for (let j=0; j<10; j++) {
            let button = document.createElement('button');
            button.className = 'field';
            button.classList.add('droppable')
            button.dataset.num = i;
            button.dataset.char = j;
            line.append(button)
        }
        table.append(line)
    }
}


function renderAllShips(player, playerBoard) {
    console.log(player)
    for (let i=0; i<player.ships.length; i++) {
        let thisShipCoord = player.ships[i].coord;
        // console.log(player)
        for (let j=0; j<thisShipCoord.length; j++) {
            playerBoard.childNodes[thisShipCoord[j][0]].childNodes[thisShipCoord[j][1]].style.backgroundColor = 'blue'
        }
    }
}

function random(max) {
    return Math.floor(Math.random() * max)
}

function autoPrepare(player) {
    console.log('autoPrepareTest1')
    function addRandomShip(size){
        let type = random(2);
        if(type == 0) {
            type = addShipHorizontal
        } else type = addShipVertical

        let x = random(10);
        let y = random(10)
        // console.log(type, x, y)
        return type([x, y], size)
    }
    console.log('autoPrepareTest2')
    for (let i=0; i<=rules.length; i++) { // Вид корабля
        for (let j=0; j<rules[i]; j++) { // Количество кораблей
            let test = 0;
            while(true) {
                test++
                if (addRandomShip(i+1)) break
                if (test == 2000) {
                    test = 0;
                    notification.fail('alarm')
                    break
                }
            }    
        }
    }
    console.log(ships)
    player.ships = ships;
    ships = [];
}

function generatePrepare() {
    let ships = document.createElement('div');
    ships.className = 'ships';
    for (let i=0; i<=rules.length; i++) {
        for (let j=0; j<rules[i]; j++) {
            ships.append(createShip(i+1))
        }
    }
    gameTable.append(ships)
}

function addShipHorizontal(e, size) {
    let num, char
    if (e.target) {
        num = parseInt(e.target.dataset.num, 10);
        char = parseInt(e.target.dataset.char, 10);
    } else {
        num = e[0];
        char = e[1];
    }

    for (let i=0; i<3; i++) {
        for (let j = 0; j<size+2; j++) {
            if  (ships.some(el => {
                return el.coord.some(elem => {
                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])
                }) 
            })){
                if (e.target) {
                    notification.fail('Рядом есть другой корабль')
                }
                return false
            }
        }
    }
    if (!playerBoard.childNodes[num].childNodes[char + size -1]) {
        if (e.target) notification.fail('Корабль выходит за границы');
        return false
    } 
    
    let arr = [];
    for (let i=0; i<size; i++) {
        // playerBoard.childNodes[num].childNodes[char + i].style.backgroundColor = 'red';
        arr.push([num, char + i])
    }
    let newShip = new Ship();
    newShip.coord = arr;
    newShip.type = "Horizontal"
    ships.push(newShip)
    return true
}

function addShipVertical(e, size) {
    let num, char
    if (e.target) {
        num = parseInt(e.target.dataset.num, 10);
        char = parseInt(e.target.dataset.char, 10);
    } else {
        num = e[0];
        char = e[1];
    }

    for (let i=0; i<size+2; i++) {
        for (let j = 0; j<3; j++) {
            if (ships.some(el => {
                return el.coord.some(elem => {
                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])
                }) 
            })){
                if (e.target) {
                    notification.fail('Рядом есть другой корабль')
                }
                return false
            }
        }
    }
    if (!playerBoard.childNodes[num + size - 1]) {
        if (e.target) notification.fail('Корабль выходит за границы');
        return false
    } 
    let arr = [];
    for (let i=0; i<size; i++) {
        arr.push([num + i, char])
    }
    let newShip = new Ship();
    newShip.coord = arr;
    newShip.type = 'Vertical'
    ships.push(newShip)
    return true
}

let dragged = null;

function dragstart_handler(ev) {
    ev.dataTransfer.effectAllowed = "move";
    dragged = ev.target;
}

function dragleave_handler(ev) {
    if (ev.target.style.backgroundColor != 'blue') ev.target.style.background = 'none'
}


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    if (ev.target.style.backgroundColor != 'blue') ev.target.style.backgroundColor = 'pink'
}

function renderLastShip() {
    let thisShipCoord = ships[ships.length-1].coord
    for (let i=0; i<thisShipCoord.length; i++) {
        playerBoard.childNodes[thisShipCoord[i][0]].childNodes[thisShipCoord[i][1]].style.backgroundColor = 'blue'
    }
}

function drop_handler(ev) {
    ev.preventDefault();
    if (dragged.classList[1] == 'horizontal') {
        if (addShipHorizontal(ev, dragged.getElementsByTagName('button').length)) {
            dragged.remove();
            dragged = null;  
            if (ships.length == 10) {
                player.ships = ships;
                startGame()
            }
            return
        };
        if (ev.target.style.backgroundColor == 'pink') ev.target.style.background = 'none'
        return
    }
    if (addShipVertical(ev, dragged.getElementsByTagName('button').length)) {
        dragged.remove();
        dragged = null;  
        if (ships.length == 10) {
            player.ships = ships;
            startGame()
        }
        return
    };
    if (ev.target.style.backgroundColor == 'pink') ev.target.style.background = 'none'
    return
}

playerBoard.addEventListener('dragleave', dragleave_handler)
playerBoard.addEventListener('dragover', dragover_handler)
playerBoard.addEventListener('drop', drop_handler)

auto.addEventListener('click', () => {
    console.log('test0')
    autoPrepare(player);
    console.log('test1')
    renderAllShips(player, playerBoard);
    console.log('test2')
    let choise = document.getElementsByClassName('choosePrepare')[0];
    console.log('test3')
    choise.remove()
    console.log('test4')
    startGame()
    console.log('test5')
    console.log(player.ships.length)
})

manual.addEventListener('click', () => {
    generatePrepare();
    let choise = document.getElementsByClassName('choosePrepare')[0];
    choise.remove()
})

export {generatePrepare, ships, renderBoard, autoPrepare, renderAllShips, player, random}