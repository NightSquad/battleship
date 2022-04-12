import {notify} from './notify/notify.js'

const notification = new notify;

let playerBoard = document.getElementsByClassName('playerBoard')[0];

let alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е' ,'Ж', 'З', 'И', 'К']

let gameBoard = [];
let clicked = [];

let ships = [];

for (let i=0; i < 10; i++) {
    let line = document.createElement('div');
    line.className = 'line'
    line.id = i
    let obj = {}
    gameBoard.push(obj)
    for (let j=0; j<10; j++) {
        let button = document.createElement('button');
        button.className = 'field';
        button.classList.add('droppable')
        button.dataset.num = i;
        button.dataset.char = j;
        line.append(button)
        gameBoard[i][alphabet[j]] = alphabet[j] 
    }
    playerBoard.append(line)
}

function addShipHorizontal(e, size) {
    let num = parseInt(e.target.dataset.num, 10);
    let char = parseInt(e.target.dataset.char, 10);

    for (let i=0; i<3; i++) {
        for (let j = 0; j<size+2; j++) {
            if  (ships.some(el => {
                console.log(el.coord)
                return el.coord.some(elem => {
                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])
                }) 
            })){
                notification.fail('Рядом есть другой корабль')
                return false
            }
        }
    }
    if (!playerBoard.childNodes[num].childNodes[char + size -1]) {
        notification.fail('Корабль выходит за границы');
        return false
    } 
    
    let arr = [];
    console.log(num, char + 1)
    for (let i=0; i<size; i++) {
        playerBoard.childNodes[num].childNodes[char + i].style.backgroundColor = 'red';
        arr.push([num, char + i])
    }
    let newShip = new Ship();
    newShip.coord = arr;
    ships.push(newShip)
    return true
}

function addShipVertical(e, size) {
    let num = parseInt(e.target.dataset.num, 10);
    let char = parseInt(e.target.dataset.char, 10);

    for (let i=0; i<size+2; i++) {
        for (let j = 0; j<3; j++) {
            if  (ships.some(el => {
                console.log(el.coord)
                return el.coord.some(elem => {
                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])
                }) 
            })){
                notification.fail('Рядом есть другой корабль')
                return false
            }
        }
    }
    if (!playerBoard.childNodes[num + size - 1]) {
        notification.fail('Корабль выходит за границы');
        return false
    } 
    let arr = [];
    for (let i=0; i<size; i++) {
        playerBoard.childNodes[num + i].childNodes[char].style.backgroundColor = 'red';
        arr.push([num + i, char])
    }
    let newShip = new Ship();
    newShip.coord = arr;
    ships.push(newShip)
    return true
}

class Ship {
    constructor() {
        this.coord = []
    }
    hit = (e) => {
        let num = parseInt(e.currentTarget.dataset.num, 10);
        let char = parseInt(e.currentTarget.dataset.char, 10);
        e.currentTarget.style.backgroundColor = 'blue'
        if (playerBoard.childNodes[num-1]) {
            if (playerBoard.childNodes[num-1].childNodes[char-1]) playerBoard.childNodes[num-1].childNodes[char-1].style.backgroundColor = 'black';
            if (playerBoard.childNodes[num-1].childNodes[char+1]) playerBoard.childNodes[num-1].childNodes[char+1].style.backgroundColor = 'black';
        }
        if (playerBoard.childNodes[num+1]) {
            if (playerBoard.childNodes[num+1].childNodes[char-1]) playerBoard.childNodes[num+1].childNodes[char-1].style.backgroundColor = 'black';
            if (playerBoard.childNodes[num+1].childNodes[char+1]) playerBoard.childNodes[num+1].childNodes[char+1].style.backgroundColor = 'black';
        }
    }
    isSunk = () => {
        let sum = 0;
        for (let i=0; i<this.coord.length; i++) {
            if (playerBoard.childNodes[this.coord[i][0]].childNodes[this.coord[i][1]].style.backgroundColor == 'blue') {
                sum++;
            }
        }
        if (sum == this.coord.length) {
            return true
        } return false
    }
}

let dragged = null;

function dragstart_handler(ev) {
    ev.dataTransfer.effectAllowed = "move";
    dragged = ev.target;
}

function dragleave_handler(ev) {
    if (ev.target.style.backgroundColor != 'red') ev.target.style.background = 'none'
}


function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    if (ev.target.style.backgroundColor != 'red') ev.target.style.backgroundColor = 'pink'
}

function drop_handler(ev) {
    ev.preventDefault();
    if (dragged.classList[1] == 'horizontal') {
        if (addShipHorizontal(ev, dragged.getElementsByTagName('button').length)) {
            dragged.remove();
            dragged = null;  
            return
        };
        return
    }
    if (addShipVertical(ev, dragged.getElementsByTagName('button').length)) {
        dragged.remove();
        dragged = null;  
        return
    };
    return
}

playerBoard.addEventListener('dragleave', dragleave_handler)
playerBoard.addEventListener('dragover', dragover_handler)
playerBoard.addEventListener('drop', drop_handler)

let submarine = document.getElementsByClassName('submarine');

for (let i=0; i<submarine.length; i++) {
    submarine[i].addEventListener('dragstart', dragstart_handler)
    submarine[i].addEventListener('dblclick', (e) => {
        e.currentTarget.classList.toggle('horizontal')
    })
}