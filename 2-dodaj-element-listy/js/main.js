// Dodaj poniższą listę w znaczniku body:

// Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - np. Item 4, Item 5, Item 6 itd.
// Każdemu z elementów listy ustaw klasę "item"

// Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - napisz funkcję obsługującą klik przycisku button
// - musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
// - musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :)

'use strict';

const dodajElementListy = () => {
let elementListy = document.createElement('li');
let klasaElementu = document.createAttribute("class");
klasaElementu.value = "item";

let iloscLi = document.getElementsByTagName('li');
let numer = iloscLi.length + 1;
let textElementu = document.createTextNode("Item " + numer );
//console.log("działa");
elementListy.appendChild(textElementu);
elementListy.setAttributeNode(klasaElementu);
document.getElementById("items").appendChild(elementListy);

// const iloscLi = document.getElementsByTagName('li');
// console.log(iloscLI.length);
}
 

let przycisk = document.querySelector('button');
przycisk.addEventListener("click", dodajElementListy);


