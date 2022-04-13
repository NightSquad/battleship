/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\nclass gameBoard{\r\n    constructor(thisBoard) {\r\n        this.board = thisBoard\r\n    }\r\n    receiveAttack(event, player, x, y) {\r\n        return player.ships.some(element => {\r\n            return element.coord.some(el => {\r\n                if(JSON.stringify(el) == JSON.stringify([x, y])) {\r\n                    if (event.currentTarget) {\r\n                        element.hit(event)                    \r\n                    } else element.hit([x,y])\r\n                    if (element.isSunk()) {\r\n                        element.coord.forEach(elem => {\r\n                            this.board.childNodes[elem[0]].childNodes[elem[1]].style.backgroundColor = 'orange'\r\n                        })\r\n                        if (element.coord.length == 1) {\r\n                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1].style.backgroundColor = 'black';\r\n                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]+1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]+1].style.backgroundColor = 'black';\r\n                            if (this.board.childNodes[element.coord[0][0]+1]) this.board.childNodes[element.coord[0][0]+1].childNodes[element.coord[0][1]].style.backgroundColor = 'black';\r\n                            if (this.board.childNodes[element.coord[0][0]-1]) this.board.childNodes[element.coord[0][0]-1].childNodes[element.coord[0][1]].style.backgroundColor = 'black';\r\n                            return true\r\n                    }\r\n                        if (element.type == 'Vertical') {\r\n                            if (this.board.childNodes[element.coord[0][0]-1]) this.board.childNodes[element.coord[0][0]-1].childNodes[element.coord[0][1]].style.backgroundColor = 'black'\r\n                            if (this.board.childNodes[element.coord[element.coord.length-1][0]+1]) this.board.childNodes[element.coord[element.coord.length-1][0]+1].childNodes[element.coord[element.coord.length-1][1]].style.backgroundColor = 'black'\r\n                        }\r\n                        if (element.type == 'Horizontal') {\r\n                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[element.coord.length - 1][1]+1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[element.coord.length - 1][1]+1].style.backgroundColor = 'black'\r\n                            if (this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1]) this.board.childNodes[element.coord[0][0]].childNodes[element.coord[0][1]-1].style.backgroundColor = 'black'\r\n                        }\r\n                    }\r\n                    return true\r\n                } \r\n                this.board.childNodes[x].childNodes[y].style.backgroundColor = 'black'\r\n            })\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/notify/notify.js":
/*!******************************!*\
  !*** ./src/notify/notify.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notify\": () => (/* binding */ notify)\n/* harmony export */ });\nclass notify{\r\n    success(text) {\r\n        let modal = document.getElementsByClassName('modal')[0];\r\n        let notify = document.createElement('div');\r\n        notify.addEventListener('animationiteration', (e) => {\r\n            notify.style.animationPlayState = 'paused'\r\n            setTimeout(()=> notify.style.animationPlayState = 'running', 2000)\r\n        })\r\n        notify.addEventListener('animationend', (e) => {\r\n            notify.remove()\r\n        })\r\n        notify.classList.add('notify');\r\n        notify.style.backgroundColor = 'green'\r\n        let msg = document.createElement('p')\r\n        msg.textContent = text\r\n        notify.append(msg);\r\n        modal.prepend(notify)\r\n    }\r\n    fail(text) {\r\n        let modal = document.getElementsByClassName('modal')[0];\r\n        let notify = document.createElement('div');\r\n        notify.addEventListener('animationiteration', (e) => {\r\n            notify.style.animationPlayState = 'paused'\r\n            setTimeout(()=> notify.style.animationPlayState = 'running', 2000)\r\n        })\r\n        notify.addEventListener('animationend', (e) => {\r\n            notify.remove()\r\n        })\r\n        notify.classList.add('notify');\r\n        notify.style.backgroundColor = 'brown'\r\n        let msg = document.createElement('p')\r\n        msg.textContent = text\r\n        notify.append(msg);\r\n        modal.prepend(notify)\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/notify/notify.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this._ships = []\r\n        this._gameBoard = null;\r\n    }\r\n    get ships() {\r\n        return this._ships\r\n    }\r\n    set ships(value) {\r\n        return this._ships = value\r\n        // console.log(this.name, this._ships)\r\n    }\r\n    get gameBoard() {\r\n        return this._gameBoard;\r\n    }\r\n    \r\n    set gameBoard(value) {\r\n        return this._gameBoard = value\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/prepare.js":
/*!************************!*\
  !*** ./src/prepare.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autoPrepare\": () => (/* binding */ autoPrepare),\n/* harmony export */   \"generatePrepare\": () => (/* binding */ generatePrepare),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"renderAllShips\": () => (/* binding */ renderAllShips),\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard),\n/* harmony export */   \"ships\": () => (/* binding */ ships)\n/* harmony export */ });\n/* harmony import */ var _notify_notify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify/notify.js */ \"./src/notify/notify.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame.js */ \"./src/startGame.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst notification = new _notify_notify_js__WEBPACK_IMPORTED_MODULE_0__.notify;\r\n\r\nlet playerBoard = document.getElementsByClassName('playerBoard')[0];\r\nlet gameTable = document.getElementsByClassName('gameBoard')[0];\r\n\r\nlet player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Player')\r\nplayer.gameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_4__.gameBoard(playerBoard)\r\n\r\nlet shipsClassification= {\r\n    0: addShipHorizontal,\r\n    1: addShipVertical\r\n}\r\n\r\nlet rules = [4, 3, 2, 1] // кол-во кораблей. 4 однопалубных, 3 двухпалубных и т.д.\r\n\r\nlet ships = [];\r\n\r\nfunction createShip(size) {\r\n    let submarine = document.createElement('div');\r\n    submarine.className = 'submarine';\r\n    submarine.draggable = 'true';\r\n    for (let i=0; i<size; i++) {\r\n        let button = document.createElement('button');\r\n        submarine.append(button)\r\n    }\r\n    submarine.style.height = 25*size + 'px'\r\n    submarine.addEventListener('dragstart', dragstart_handler)\r\n    submarine.addEventListener('dblclick', (e) => {\r\n        e.currentTarget.classList.toggle('horizontal')\r\n        if (e.currentTarget.classList[1] == 'horizontal') e.currentTarget.style.height = ''\r\n        if (!e.currentTarget.classList[1]) e.currentTarget.style.height = 25*size + 'px'\r\n    })\r\n    return submarine\r\n}\r\n\r\nfunction renderBoard(table) {\r\n    for (let i=0; i < 10; i++) {\r\n        let line = document.createElement('div');\r\n        line.className = 'line'\r\n        line.id = i\r\n        for (let j=0; j<10; j++) {\r\n            let button = document.createElement('button');\r\n            button.className = 'field';\r\n            button.classList.add('droppable')\r\n            button.dataset.num = i;\r\n            button.dataset.char = j;\r\n            line.append(button)\r\n        }\r\n        table.append(line)\r\n    }\r\n}\r\n\r\n\r\nfunction renderAllShips(player, playerBoard) {\r\n    console.log(player)\r\n    for (let i=0; i<player.ships.length; i++) {\r\n        let thisShipCoord = player.ships[i].coord;\r\n        // console.log(player)\r\n        for (let j=0; j<thisShipCoord.length; j++) {\r\n            playerBoard.childNodes[thisShipCoord[j][0]].childNodes[thisShipCoord[j][1]].style.backgroundColor = 'blue'\r\n        }\r\n    }\r\n}\r\n\r\nfunction random(max) {\r\n    return Math.floor(Math.random() * max)\r\n}\r\n\r\nfunction autoPrepare(player) {\r\n    console.log('autoPrepareTest1')\r\n    function addRandomShip(size){\r\n        let type = random(2);\r\n        if(type == 0) {\r\n            type = addShipHorizontal\r\n        } else type = addShipVertical\r\n\r\n        let x = random(10);\r\n        let y = random(10)\r\n        // console.log(type, x, y)\r\n        return type([x, y], size)\r\n    }\r\n    console.log('autoPrepareTest2')\r\n    for (let i=0; i<=rules.length; i++) { // Вид корабля\r\n        for (let j=0; j<rules[i]; j++) { // Количество кораблей\r\n            let test = 0;\r\n            while(true) {\r\n                test++\r\n                if (addRandomShip(i+1)) break\r\n                if (test == 2000) {\r\n                    test = 0;\r\n                    notification.fail('alarm')\r\n                    break\r\n                }\r\n            }    \r\n        }\r\n    }\r\n    console.log(ships)\r\n    player.ships = ships;\r\n    ships = [];\r\n}\r\n\r\nfunction generatePrepare() {\r\n    let ships = document.createElement('div');\r\n    ships.className = 'ships';\r\n    for (let i=0; i<=rules.length; i++) {\r\n        for (let j=0; j<rules[i]; j++) {\r\n            ships.append(createShip(i+1))\r\n        }\r\n    }\r\n    gameTable.append(ships)\r\n}\r\n\r\nfunction addShipHorizontal(e, size) {\r\n    let num, char\r\n    if (e.target) {\r\n        num = parseInt(e.target.dataset.num, 10);\r\n        char = parseInt(e.target.dataset.char, 10);\r\n    } else {\r\n        num = e[0];\r\n        char = e[1];\r\n    }\r\n\r\n    for (let i=0; i<3; i++) {\r\n        for (let j = 0; j<size+2; j++) {\r\n            if  (ships.some(el => {\r\n                return el.coord.some(elem => {\r\n                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])\r\n                }) \r\n            })){\r\n                if (e.target) {\r\n                    notification.fail('Рядом есть другой корабль')\r\n                }\r\n                return false\r\n            }\r\n        }\r\n    }\r\n    if (!playerBoard.childNodes[num].childNodes[char + size -1]) {\r\n        if (e.target) notification.fail('Корабль выходит за границы');\r\n        return false\r\n    } \r\n    \r\n    let arr = [];\r\n    for (let i=0; i<size; i++) {\r\n        // playerBoard.childNodes[num].childNodes[char + i].style.backgroundColor = 'red';\r\n        arr.push([num, char + i])\r\n    }\r\n    let newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship();\r\n    newShip.coord = arr;\r\n    newShip.type = \"Horizontal\"\r\n    ships.push(newShip)\r\n    return true\r\n}\r\n\r\nfunction addShipVertical(e, size) {\r\n    let num, char\r\n    if (e.target) {\r\n        num = parseInt(e.target.dataset.num, 10);\r\n        char = parseInt(e.target.dataset.char, 10);\r\n    } else {\r\n        num = e[0];\r\n        char = e[1];\r\n    }\r\n\r\n    for (let i=0; i<size+2; i++) {\r\n        for (let j = 0; j<3; j++) {\r\n            if (ships.some(el => {\r\n                return el.coord.some(elem => {\r\n                    return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])\r\n                }) \r\n            })){\r\n                if (e.target) {\r\n                    notification.fail('Рядом есть другой корабль')\r\n                }\r\n                return false\r\n            }\r\n        }\r\n    }\r\n    if (!playerBoard.childNodes[num + size - 1]) {\r\n        if (e.target) notification.fail('Корабль выходит за границы');\r\n        return false\r\n    } \r\n    let arr = [];\r\n    for (let i=0; i<size; i++) {\r\n        arr.push([num + i, char])\r\n    }\r\n    let newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_3__.Ship();\r\n    newShip.coord = arr;\r\n    newShip.type = 'Vertical'\r\n    ships.push(newShip)\r\n    return true\r\n}\r\n\r\nlet dragged = null;\r\n\r\nfunction dragstart_handler(ev) {\r\n    ev.dataTransfer.effectAllowed = \"move\";\r\n    dragged = ev.target;\r\n}\r\n\r\nfunction dragleave_handler(ev) {\r\n    if (ev.target.style.backgroundColor != 'blue') ev.target.style.background = 'none'\r\n}\r\n\r\n\r\nfunction dragover_handler(ev) {\r\n    ev.preventDefault();\r\n    ev.dataTransfer.dropEffect = 'move';\r\n    if (ev.target.style.backgroundColor != 'blue') ev.target.style.backgroundColor = 'pink'\r\n}\r\n\r\nfunction renderLastShip() {\r\n    let thisShipCoord = ships[ships.length-1].coord\r\n    for (let i=0; i<thisShipCoord.length; i++) {\r\n        playerBoard.childNodes[thisShipCoord[i][0]].childNodes[thisShipCoord[i][1]].style.backgroundColor = 'blue'\r\n    }\r\n}\r\n\r\nfunction drop_handler(ev) {\r\n    ev.preventDefault();\r\n    if (dragged.classList[1] == 'horizontal') {\r\n        if (addShipHorizontal(ev, dragged.getElementsByTagName('button').length)) {\r\n            dragged.remove();\r\n            dragged = null;  \r\n            if (ships.length == 10) {\r\n                player.ships = ships;\r\n                (0,_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)()\r\n            }\r\n            return\r\n        };\r\n        if (ev.target.style.backgroundColor == 'pink') ev.target.style.background = 'none'\r\n        return\r\n    }\r\n    if (addShipVertical(ev, dragged.getElementsByTagName('button').length)) {\r\n        dragged.remove();\r\n        dragged = null;  \r\n        if (ships.length == 10) {\r\n            player.ships = ships;\r\n            (0,_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)()\r\n        }\r\n        return\r\n    };\r\n    if (ev.target.style.backgroundColor == 'pink') ev.target.style.background = 'none'\r\n    return\r\n}\r\n\r\nplayerBoard.addEventListener('dragleave', dragleave_handler)\r\nplayerBoard.addEventListener('dragover', dragover_handler)\r\nplayerBoard.addEventListener('drop', drop_handler)\r\n\r\nauto.addEventListener('click', () => {\r\n    console.log('test0')\r\n    autoPrepare(player);\r\n    console.log('test1')\r\n    renderAllShips(player, playerBoard);\r\n    console.log('test2')\r\n    let choise = document.getElementsByClassName('choosePrepare')[0];\r\n    console.log('test3')\r\n    choise.remove()\r\n    console.log('test4')\r\n    ;(0,_startGame_js__WEBPACK_IMPORTED_MODULE_2__.startGame)()\r\n    console.log('test5')\r\n    console.log(player.ships.length)\r\n})\r\n\r\nmanual.addEventListener('click', () => {\r\n    generatePrepare();\r\n    let choise = document.getElementsByClassName('choosePrepare')[0];\r\n    choise.remove()\r\n})\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/prepare.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prepare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepare */ \"./src/prepare.js\");\n\r\n(0,_prepare__WEBPACK_IMPORTED_MODULE_0__.renderBoard)(document.getElementsByClassName('playerBoard')[0])\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import {notify} from './notify/notify.js'\r\n\r\n// const notification = new notify;\r\n\r\n// let playerBoard = document.getElementsByClassName('playerBoard')[0];\r\n\r\n// let alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е' ,'Ж', 'З', 'И', 'К']\r\n\r\n// let clicked = [];\r\n\r\n// let ships = [];\r\n\r\n// for (let i=0; i < 10; i++) {\r\n//     let line = document.createElement('div');\r\n//     line.className = 'line'\r\n//     line.id = i\r\n//     for (let j=0; j<10; j++) {\r\n//         let button = document.createElement('button');\r\n//         button.className = 'field';\r\n//         button.classList.add('droppable')\r\n//         button.dataset.num = i;\r\n//         button.dataset.char = j;\r\n\r\n//         button.addEventListener('click', function(e) {\r\n//             console.log(i, j)\r\n//             if (!ships.some((el, index) => {\r\n//                 if (el.coord.some(element => { \r\n//                     return JSON.stringify(element) == JSON.stringify([i, j])\r\n//                 })) {\r\n//                     el.hit(e)\r\n//                     el.isSunk()\r\n//                     console.log(el.isSunk())\r\n//                     console.log(el.coord)\r\n//                     if (el.isSunk()) {\r\n//                         el.coord.forEach(elem => {\r\n//                             playerBoard.childNodes[elem[0]].childNodes[elem[1]].style.backgroundColor = 'green'\r\n//                         })\r\n//                         if (playerBoard.childNodes[el.coord[0][0]-1]) playerBoard.childNodes[el.coord[0][0]-1].childNodes[el.coord[0][1]].style.backgroundColor = 'black'\r\n//                         if (playerBoard.childNodes[el.coord[el.coord.length-1][0]+1]) playerBoard.childNodes[el.coord[el.coord.length-1][0]+1].childNodes[el.coord[el.coord.length-1][1]].style.backgroundColor = 'black'\r\n//                         if (el.coord.length == 1) {\r\n//                             playerBoard.childNodes[el.coord[0][0]].childNodes[el.coord[0][1]-1].style.backgroundColor = 'black';\r\n//                             playerBoard.childNodes[el.coord[0][0]].childNodes[el.coord[0][1]+1].style.backgroundColor = 'black';\r\n//                         }\r\n//                     }\r\n//                     return true\r\n//                 } else {return false}\r\n//             })) \r\n//             button.style.backgroundColor = 'black'\r\n            \r\n//         })\r\n//         line.append(button)\r\n//     }\r\n//     playerBoard.append(line)\r\n// }\r\n\r\n// function addShipHorizontal(e, size) {\r\n//     let num = parseInt(e.target.dataset.num, 10);\r\n//     let char = parseInt(e.target.dataset.char, 10);\r\n\r\n//     for (let i=0; i<3; i++) {\r\n//         for (let j = 0; j<size+2; j++) {\r\n//             if  (ships.some(el => {\r\n//                 console.log(el.coord)\r\n//                 return el.coord.some(elem => {\r\n//                     return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])\r\n//                 }) \r\n//             })){\r\n//                 notification.fail('Рядом есть другой корабль')\r\n//                 return false\r\n//             }\r\n//         }\r\n//     }\r\n//     if (!playerBoard.childNodes[num].childNodes[char + size -1]) {\r\n//         notification.fail('Корабль выходит за границы');\r\n//         return false\r\n//     } \r\n    \r\n//     let arr = [];\r\n//     console.log(num, char + 1)\r\n//     for (let i=0; i<size; i++) {\r\n//         playerBoard.childNodes[num].childNodes[char + i].style.backgroundColor = 'red';\r\n//         arr.push([num, char + i])\r\n//     }\r\n//     let newShip = new Ship();\r\n//     newShip.coord = arr;\r\n//     ships.push(newShip)\r\n//     return true\r\n// }\r\n\r\n// function addShipVertical(e, size) {\r\n//     let num = parseInt(e.target.dataset.num, 10);\r\n//     let char = parseInt(e.target.dataset.char, 10);\r\n\r\n//     for (let i=0; i<size+2; i++) {\r\n//         for (let j = 0; j<3; j++) {\r\n//             if  (ships.some(el => {\r\n//                 console.log(el.coord)\r\n//                 return el.coord.some(elem => {\r\n//                     return JSON.stringify(elem) == JSON.stringify([num - 1 + i, char -1 + j])\r\n//                 }) \r\n//             })){\r\n//                 notification.fail('Рядом есть другой корабль')\r\n//                 return false\r\n//             }\r\n//         }\r\n//     }\r\n//     if (!playerBoard.childNodes[num + size - 1]) {\r\n//         notification.fail('Корабль выходит за границы');\r\n//         return false\r\n//     } \r\n//     let arr = [];\r\n//     for (let i=0; i<size; i++) {\r\n//         playerBoard.childNodes[num + i].childNodes[char].style.backgroundColor = 'red';\r\n//         arr.push([num + i, char])\r\n//     }\r\n//     let newShip = new Ship();\r\n//     newShip.coord = arr;\r\n//     ships.push(newShip)\r\n//     return true\r\n// }\r\n\r\n// class Ship {\r\n//     constructor() {\r\n//         this.coord = []\r\n//     }\r\n//     hit = (e) => {\r\n//         let num = parseInt(e.currentTarget.dataset.num, 10);\r\n//         let char = parseInt(e.currentTarget.dataset.char, 10);\r\n//         e.currentTarget.style.backgroundColor = 'blue'\r\n//         if (playerBoard.childNodes[num-1]) {\r\n//             if (playerBoard.childNodes[num-1].childNodes[char-1]) playerBoard.childNodes[num-1].childNodes[char-1].style.backgroundColor = 'black';\r\n//             if (playerBoard.childNodes[num-1].childNodes[char+1]) playerBoard.childNodes[num-1].childNodes[char+1].style.backgroundColor = 'black';\r\n//         }\r\n//         if (playerBoard.childNodes[num+1]) {\r\n//             if (playerBoard.childNodes[num+1].childNodes[char-1]) playerBoard.childNodes[num+1].childNodes[char-1].style.backgroundColor = 'black';\r\n//             if (playerBoard.childNodes[num+1].childNodes[char+1]) playerBoard.childNodes[num+1].childNodes[char+1].style.backgroundColor = 'black';\r\n//         }\r\n//     }\r\n//     isSunk = () => {\r\n//         let sum = 0;\r\n//         for (let i=0; i<this.coord.length; i++) {\r\n//             if (playerBoard.childNodes[this.coord[i][0]].childNodes[this.coord[i][1]].style.backgroundColor == 'blue') {\r\n//                 sum++;\r\n//             }\r\n//         }\r\n//         if (sum == this.coord.length) {\r\n//             return true\r\n//         } return false\r\n//     }\r\n// }\r\n\r\n// let dragged = null;\r\n\r\n// function dragstart_handler(ev) {\r\n//     ev.dataTransfer.effectAllowed = \"move\";\r\n//     dragged = ev.target;\r\n// }\r\n\r\n// function dragleave_handler(ev) {\r\n//     if (ev.target.style.backgroundColor != 'red') ev.target.style.background = 'none'\r\n// }\r\n\r\n\r\n// function dragover_handler(ev) {\r\n//     ev.preventDefault();\r\n//     ev.dataTransfer.dropEffect = 'move';\r\n//     if (ev.target.style.backgroundColor != 'red') ev.target.style.backgroundColor = 'pink'\r\n// }\r\n\r\n// function drop_handler(ev) {\r\n//     ev.preventDefault();\r\n//     if (dragged.classList[1] == 'horizontal') {\r\n//         if (addShipHorizontal(ev, dragged.getElementsByTagName('button').length)) {\r\n//             dragged.remove();\r\n//             dragged = null;  \r\n//             return\r\n//         };\r\n//         return\r\n//     }\r\n//     if (addShipVertical(ev, dragged.getElementsByTagName('button').length)) {\r\n//         dragged.remove();\r\n//         dragged = null;  \r\n//         return\r\n//     };\r\n//     return\r\n// }\r\n\r\n// playerBoard.addEventListener('dragleave', dragleave_handler)\r\n// playerBoard.addEventListener('dragover', dragover_handler)\r\n// playerBoard.addEventListener('drop', drop_handler)\r\n\r\n// let submarine = document.getElementsByClassName('submarine');\r\n\r\n// for (let i=0; i<submarine.length; i++) {\r\n//     submarine[i].addEventListener('dragstart', dragstart_handler)\r\n//     submarine[i].addEventListener('dblclick', (e) => {\r\n//         e.currentTarget.classList.toggle('horizontal')\r\n//     })\r\n// }\n\n//# sourceURL=webpack://battleship/./src/script.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ \"./src/startGame.js\");\n\r\n\r\nclass Ship {\r\n    constructor() {\r\n        this.coord = []\r\n        this.Board = null;\r\n        this.type = null;\r\n    }\r\n    hit = (e) => {\r\n        let num, char\r\n        if(e.currentTarget) {\r\n            num = parseInt(e.currentTarget.dataset.num, 10);\r\n            char = parseInt(e.currentTarget.dataset.char, 10);\r\n            this.Board = e.currentTarget.parentElement.parentElement;\r\n        } else {\r\n            num = e[0];\r\n            char = e[1];\r\n            this.Board = _startGame__WEBPACK_IMPORTED_MODULE_0__.players[_startGame__WEBPACK_IMPORTED_MODULE_0__.currentPlayer].gameBoard.board;\r\n        }\r\n\r\n        if (this.Board.childNodes[num-1]) {\r\n            if (this.Board.childNodes[num-1].childNodes[char-1]) this.Board.childNodes[num-1].childNodes[char-1].style.backgroundColor = 'black';\r\n            if (this.Board.childNodes[num-1].childNodes[char+1]) this.Board.childNodes[num-1].childNodes[char+1].style.backgroundColor = 'black';\r\n        }\r\n        if (this.Board.childNodes[num+1]) {\r\n            if (this.Board.childNodes[num+1].childNodes[char-1]) this.Board.childNodes[num+1].childNodes[char-1].style.backgroundColor = 'black';\r\n            if (this.Board.childNodes[num+1].childNodes[char+1]) this.Board.childNodes[num+1].childNodes[char+1].style.backgroundColor = 'black';\r\n        }\r\n        this.Board.childNodes[num].childNodes[char].style.backgroundColor = 'red'\r\n    }\r\n    isSunk = () => {\r\n        let sum = 0;\r\n        for (let i=0; i<this.coord.length; i++) {\r\n            if (this.Board.childNodes[this.coord[i][0]].childNodes[this.coord[i][1]].style.backgroundColor == 'red') {\r\n                sum++;\r\n            }\r\n        }\r\n        if (sum == this.coord.length) {\r\n            return true\r\n        } return false\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/startGame.js":
/*!**************************!*\
  !*** ./src/startGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentPlayer\": () => (/* binding */ currentPlayer),\n/* harmony export */   \"players\": () => (/* binding */ players),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _prepare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prepare */ \"./src/prepare.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\r\n\r\n\r\n\r\nlet currentPlayer = 0;\r\n\r\nlet computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('computer');\r\n\r\nlet players = []\r\n\r\ncomputer.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_2__.gameBoard(document.getElementsByClassName('playerBoard')[1])\r\n\r\nfunction startGame(){\r\n    players.push(_prepare__WEBPACK_IMPORTED_MODULE_1__.player, computer)\r\n    document.getElementsByClassName('gameBoard')[1].style.display = 'flex'\r\n    let playerBoard = computer.gameBoard.board\r\n    ;(0,_prepare__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(playerBoard)\r\n    ;(0,_prepare__WEBPACK_IMPORTED_MODULE_1__.autoPrepare)(computer);\r\n    (0,_prepare__WEBPACK_IMPORTED_MODULE_1__.renderAllShips)(computer, playerBoard)\r\n    let button\r\n    for (let i=0; i<10; i++) {\r\n        for (let j = 0; j<10; j++) {\r\n            button = playerBoard.childNodes[i].childNodes[j];\r\n            button.addEventListener('click', function(e) {  \r\n                if (currentPlayer != 0) return\r\n                if (!computer.gameBoard.receiveAttack(e, computer, i, j)) {\r\n                    computerAttack()\r\n                    switchPlayer()\r\n                    console.log(players[currentPlayer].gameBoard)\r\n                }\r\n            })\r\n        }\r\n    }\r\n}\r\n\r\nfunction computerAttack() {\r\n    console.log('Ходит компьютер')\r\n    let x = (0,_prepare__WEBPACK_IMPORTED_MODULE_1__.random)(10);\r\n    let y = (0,_prepare__WEBPACK_IMPORTED_MODULE_1__.random)(10)\r\n    if (_prepare__WEBPACK_IMPORTED_MODULE_1__.player.gameBoard.receiveAttack('_', _prepare__WEBPACK_IMPORTED_MODULE_1__.player, x, y)) {\r\n        console.log('Компьютер попал')\r\n        computerAttack()\r\n    } else { \r\n    console.log(_prepare__WEBPACK_IMPORTED_MODULE_1__.player.gameBoard.board.childNodes[x].childNodes[y])\r\n    _prepare__WEBPACK_IMPORTED_MODULE_1__.player.gameBoard.board.childNodes[x].childNodes[y].style.backgroundColor = 'black';\r\n\r\n    switchPlayer()\r\n    return\r\n    }\r\n}\r\n\r\nfunction switchPlayer() {\r\n    if (currentPlayer == 0) {\r\n        currentPlayer = 1;\r\n    } else currentPlayer = 0\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/startGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;