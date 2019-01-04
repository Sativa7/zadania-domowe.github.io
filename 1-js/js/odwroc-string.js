'use strict';

const odwrocString = (string) => {
    let splitString = string.split('');
    let reverseArString = splitString.reverse();
    let joinArString = reverseArString.join('');

    return joinArString;
}

console.log("Czytaj wspak: "+ odwrocString('Akademia108'));
