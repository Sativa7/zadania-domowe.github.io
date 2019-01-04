'use strict';

let zespol = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

console.log(zespol);

zespol.pracownicy.forEach(function (dane, numer) {
console.log('Pracownik nr ' + numer + ' nazywa się ' +dane.firstName + ' ' + dane.lastName +'.')
});