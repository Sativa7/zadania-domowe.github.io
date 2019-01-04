'use strict';

class Ksiazka {
    constructor(tytul, autor, Boolean) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = Boolean;
    }

    opiszKsiazke() {

        if (this.przeczytana === true) {
            console.log('Ksiązka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + 'i została przeczytana.');
        } else {
            console.log('Ksiązka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + 'i jeszcze nie została przeczytana.');
        }
    }
}

let karamazow = new Ksiazka('Bracia Karamazow', 'Fiodor Dostojewski', true);
let martin = new Ksiazka('Gra o Tron', 'George Martin', false);
let teresa = new Ksiazka('Księga zycia', 'sw. Teresa z Avila', false);


let tablica = [karamazow, martin, teresa];

martin.opiszKsiazke();

const iloscPrzeczytanych = () => {

    let przeczytane = 0;

    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i].przeczytana === true) {
            przeczytane += tablica[i].przeczytana;
            tablica[i].opiszKsiazke();
        } else {
            tablica[i].opiszKsiazke();
        }
    }
    return przeczytane;
}

let iloscPrzeczytanychZTablicy = iloscPrzeczytanych(tablica);

if (iloscPrzeczytanychZTablicy == 1) {
    console.log('Przeczytano ' + iloscPrzeczytanychZTablicy + ' ksiązkę.');
} else if (iloscPrzeczytanychZTablicy == 12 || iloscPrzeczytanychZTablicy == 13 || iloscPrzeczytanychZTablicy == 14) {
    console.log('Przeczytano ' + iloscPrzeczytanychZTablicy + ' ksiązek.');
} else if (iloscPrzeczytanychZTablicy % 10 == 2 || iloscPrzeczytanychZTablicy % 10 == 3 || iloscPrzeczytanychZTablicy == 4) {
    console.log('Przeczytano ' + iloscPrzeczytanychZTablicy + ' ksiązki.')
} else {
    console.log('Przeczytano ' + iloscPrzeczytanychZTablicy + ' ksiązek.');
}