"use strict";
class Card {
    constructor(card1, card2 = card1, set = card1, sound = card1) {
        this.card1 = card1,
            this.card2 = card2,
            this.set = set,
            this.sound = sound
    }
}

const myField = document.getElementById('field');
const selectField = document.getElementById('boardOptions');

const myCardArray = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];

myField.addEventListener('click', onClickCard);
myField.addEventListener('click', onClickCover);

selectField.addEventListener('change', onSelectFieldSize);

let myCardSet;
let boardClass;


// schud de kaarten met Fisher–Yates
function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

// selecteer een veld formaat en pas het aantal kaarten daarop aan
function onSelectFieldSize(e) {
    let fieldSize = e.target.value;
    let shuffledCards = shuffle(myCardArray);
    switch (fieldSize) {
        case "4":
            boardClass = "board4";
            shuffledCards = shuffledCards.slice(0,8);
            console.log(shuffledCards);
            break;
        case "5": 
            boardClass = "board5";
            shuffledCards = shuffledCards.slice(0,12);
            console.log(shuffledCards);
            break;
        case "6": 
            boardClass = "board6";
            shuffledCards = shuffledCards.slice(0,18);
            console.log(shuffledCards);
            break;
    }

// verdubbel het aantal kaarten
    let myDbCardArray = shuffledCards;
    myDbCardArray = myDbCardArray.concat(shuffledCards);
    myDbCardArray = shuffle(myDbCardArray);
    myCardSet = myDbCardArray.map(card => new Card(card));
    populateField();
}

// vul het veld met het gekozen aantal kaarten
function populateField() {
    myField.innerHTML = "";
    myCardSet.forEach(element => {
        let newTile = document.createElement('div');
        let newCard = document.createElement('img');
        let cover = document.createElement('img');
        newTile.setAttribute('class', boardClass);
        let imgURL = 'img/' + element.card1 + '.jpg';
        newCard.setAttribute('src', imgURL);

        cover.setAttribute('src', 'img/cover.png');
        cover.setAttribute('class', 'covered');

        newCard.setAttribute('name', element.card1);

        newTile.appendChild(newCard);
        newTile.appendChild(cover);
        myField.appendChild(newTile);

    });
};

function onClickCard(e) {
    console.log(e.target.getAttribute('name'));
}

function onClickCover(e) {
    const parentElement = e.target.parentNode;
    const cardName = parentElement.firstChild.name
    if (e.target.className === "covered") {
        e.target.className = 'uncovered';
        console.log(cardName);
    } return;
}


