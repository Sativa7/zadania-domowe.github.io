'use strict';
//deklaracja tablicy z miastami
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
//utworzenie w pamięci elementu 'ol
let listaNumerowana = document.createElement('ol');
//pojawienie elementu 'ol' na stronie
document.body.appendChild(listaNumerowana);
//PĘTLA
for (let i = 0; i <= 6; i++) {
    //tworze element li w pamieci
    let elementListy = document.createElement('li');
    //tworze element klasa w pamieci
    let klasaElementu = document.createAttribute('class');
    // przypisuje klasie wartość
    klasaElementu.value = 'city';
    //pojawiam element li jako dzieczko elementu ol na stronie
    listaNumerowana.appendChild(elementListy);
    //przypisuję elementowi li klasę
    elementListy.setAttributeNode(klasaElementu);
    // tworze element tekstowy w pamieci
    let listaMiasto = document.createTextNode(cities[i]);
    //przypisuję element tekstowy jako element listy li
    elementListy.appendChild(listaMiasto);
}

document.getElementById('main-header');