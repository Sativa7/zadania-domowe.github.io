'use strict';

const sumaKwadratow = (tablica) => {
  
    let suma = 0;

    for (let i = 1; i < tablica.length; i++ ) {
        suma += Math.pow(tablica[i], 2);
    }
    console.log(suma);
}

console.log(sumaKwadratow([0,1,2,3,4,5]));