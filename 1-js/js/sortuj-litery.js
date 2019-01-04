'use strict';

const sortowanieStringa = (string) => {
    let splitString = string.split('');
    let sortowanieTablicy = splitString.sort();
    let sortowanie = sortowanieTablicy.join('');

    return sortowanie;
}

console.log('Posortowane literki w napisie: ' + sortowanieStringa('Akademia108'));