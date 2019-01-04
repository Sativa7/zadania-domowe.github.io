'use strict';

//takie zadanie lepiej rozwiązywa

const zmienKolor = () => {
   //console.log("test");
   let paragrafy = document.getElementsByClassName('par'); //pobieramy kolekcję (tablica przegladarki - tablica nie ma wlasciwosci style, dlatego nie mozemy nadac koloru calej tablicy, wiec paragrafy.syle.color = 'red' - nie zadziala)

   //na tablicach stosujemy pętlę for each - trzymamy się takiej zasady. For te zadziała.
   // dlatego (jak nizej) konwertujemy:
   paragrafy = Array.from(paragrafy);

  paragrafy.forEach((element, index) => { //error - is not a function. Kolekcja to nie jest tablica. Nie ma for each. Kolekcję moemy PRZEKONWERTOWAĆ na array. 
 //element.style.color = "red";

      if (index === 2) {
         element.style.color = 'blue'
         //chcemy tez zmienic tekst tego paragrafu
         element.innerHTML = 'Kliknij mnie!';
         // zeby cos się zadziało musze podpiąć event
         element.onclick = () => {
         document.body.style.backgroundColor = 'yellow';
         }
      }
      else if (index === 4) {
         element.style.color = 'green';
         element.innerHTML = 'Kliknij mnie!';
         //chcemy, zeby pod tym pojawil sie kolejny paragraf - musze podpiać jakiś event do elementu
         element.onclick = () => {
            // trzeba: stworzyc paragraf - podpiac text do tego paragrafu - i pojawic go na stronie
            let paragraf6 = document.createElement('p'); //stworzylismy pusty paragraf
            paragraf6.innerHTML = 'paragraf 6';
            paragraf6.setAttribute('class, par');
            document.body.appendChild(paragraf6); //przypinamy do strony w body
         }
// js leci kaskadowo, czyli kolor będzie deafoult - linijka po linijce
      }
      else {
         element.style.color = "red";
   
      }
      
   });
//for each wie, ze ma po calej kolekcji, a for - definiujemy na ile.
   for (let i=0; i < paragrafy.length; i++){
      // I iteracja - przypisuję 0, jest mniejsze: true -> powiększy index / a potem od początku
      paragrafy[i].style.color = 'red';
   }


}

//najpierw definiujemy button - do niego jest przypięta funkcja i nic nie zadziala, jesli nie zostanie klikniety ten przycisk
let przycisk = document.getElementById('przycisk'); //z hashem, czy bez hasha? (?)
przycisk.onclick = zmienKolor; //(z nawiasami się przeładuje, a chcemy tylko wywołać

