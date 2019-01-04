'use strict';

const sumaIloczyn = (a) => {
    let tablica = a;
    let suma = 0;
    let iloczyn = 1;

    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i];
        iloczyn *= tablica[i];
    }

    console.log ("Suma elementów tablicy wynosi: " + suma);
    console.log ("Iloczyn elementów tablicy wynosi: " + iloczyn);
}

console.log(sumaIloczyn([1, 2, 3, 4, 5, 6]));