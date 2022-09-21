"use strict";

// Deel 2
class Card {
    constructor(card1, card2=card1, set=card1, sound=card1) {
        this.card1 = card1,
        this.card2 = card2,
        this.set = set,
        this.sound = sound
    }
} 


// maak een const myField en koppel deze aan de div met id="field"
const myField = document.getElementById('field');

// Geef myField een event listener die de functie onClickCard aanroept als er op geklikt wordt
myField.addEventListener('click', onClickCard);

// de volgende regel krijg je vast cadeau:
const myCardArray = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];


// verdubbel het aantal kaarten
let myDbCardArray = myCardArray;

myDbCardArray = myDbCardArray.concat(myCardArray);
myDbCardArray = shuffle(myDbCardArray);

const myCardSet = myDbCardArray.map(card => new Card(card));
console.log(myCardSet)


// schud de kaarten met Fisher–Yates
function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

// geef het document een event listener die bij het laden van de pagina de functie populateField aanroept
window.addEventListener('load', populateField());

// schrijf hier de nieuwe functie populateField()
function populateField() {
    // maak binnen deze nieuwe functie een for loop waarin over de array myCardArray geïtereerd wordt (Mag ook met forEach, dat is zelfs beter). 
    myCardSet.forEach(element => {
        let newTile = document.createElement('div');
        let newCard = document.createElement('img');
        let imgURL = 'img/' + element.card1 + '.jpg';
        newTile.setAttribute('class', 'board6');
        newCard.setAttribute('src', imgURL);
        newCard.setAttribute('name', element.card1);
        
        newTile.appendChild(newCard);
        myField.appendChild(newTile);

    });
};
// De volgende statements komen allemaal in de loop:
// laat met de method document.createElement() een nieuw div-element aanmaken en stop die in een nieuwe let 'newTile'
// laat  met de method document.createElement() een nieuw img-element aanmaken en stop die in een nieuwe let 'newCard'
// creëer een nieuwe let 'imageURL' en laat via concatination een relatieve verwijzing naar de afbeelding uit het array waar over geïtereerd wordt die de uiteindelijke vorm moet krijgen "url(img/naamDier.jpg)" waarbij naamDier in dit geval steeds een andere naam is uit het array.
// Ken deze imageURL via setAttribute() toe aan het src attribute van let 'newCard'.
// Ken ook de naam van het dier via setAttribute() toe aan de name attribute van de let 'newCard';
// Ken via de appendChild() method het element 'newCard' toe aan 'newTile'
// Ken via de appendChild() method het element 'newTile' toe aan 'myField'


// schrijf hier de functie onClickCard(e)
function onClickCard(e) {
    console.log(e.target.getAttribute('name'));
}
// Zorg er voor dat als deze functie wordt uitgevoerd, m.b.v. de method getAttribute() in het console de naam van het aangeklikte dier getoond wordt.
// Hint, je moet hierbij gebruik maken van de verwijzing e.target omdat je de naam van het element wilt weten waar op geklikt is, dus die het 'click' event verstuurd heeft.

