'use strict';

const elementFibonacci = (n) => {

    let elementCiagu = 0;

    if (n == 0 || n == 1) {
        elementCiagu = n;
    } else {
        elementCiagu = elementFibonacci(n - 1) + elementFibonacci(n - 2);
    }
    return elementCiagu;
}

console.log(elementFibonacci(17));