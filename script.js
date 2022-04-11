import notify from './notify/notify.js'
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
        // button.addEventListener('click', (e) => {
        //     button.style.backgroundColor = 'red';
        //     clicked.push([i, j])

        // })
        button.addEventListener('click', call = (e) => {
            console.log(i, j)
            if (!ships.some((el, index) => {
                if (el.coord.some(element => { 
                    return JSON.stringify(element) == JSON.stringify([i, j])
                })) {
                    el.hit(e)
                    el.isSunk()
                    console.log(el.isSunk())
                    console.log(el.coord)
                    if (el.isSunk()) {
                        el.coord.forEach(elem => {
                            playerBoard.childNodes[elem[0]].childNodes[elem[1]].style.backgroundColor = 'green'
                        })
                        if (playerBoard.childNodes[el.coord[0][0]-1]) playerBoard.childNodes[el.coord[0][0]-1].childNodes[el.coord[0][1]].style.backgroundColor = 'black'
                        if (playerBoard.childNodes[el.coord[el.coord.length-1][0]+1]) playerBoard.childNodes[el.coord[el.coord.length-1][0]+1].childNodes[el.coord[el.coord.length-1][1]].style.backgroundColor = 'black'
                        if (el.coord.length == 1) {
                            playerBoard.childNodes[el.coord[0][0]].childNodes[el.coord[0][1]-1].style.backgroundColor = 'black';
                            playerBoard.childNodes[el.coord[0][0]].childNodes[el.coord[0][1]+1].style.backgroundColor = 'black';
                        }
                    }
                    return true
                } else {return false}
            })) 
            button.style.backgroundColor = 'black'
            
        })
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
                // console.log(JSON.stringify([num - 1 + i, char -1 + j]))
                console.log(el.coord)
                return el.coord.some(elem => {
                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])
                }) 
            })){
                return false
            }
        }
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

    let arr = [];
    for (let i=0; i<size; i++) {
        playerBoard.childNodes[num + i].childNodes[char].style.backgroundColor = 'red';
        arr.push([num + i, char])
    }
    let newShip = new Ship();
    newShip.coord = arr;
    ships.push(newShip)
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
    if (addShipHorizontal(ev, dragged.getElementsByTagName('button').length)) {
        dragged.remove();
        dragged = null;  
        return
    };
    notification.success()
}

submarine = document.getElementsByClassName('submarine');

for (let i=0; i<submarine.length; i++) {
    submarine[i].addEventListener('dragstart', dragstart_handler)
}