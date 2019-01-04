'use strict';
//deklaracja tablicy z nieposortowanymi liczbami
let nieposortowane = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
//funkcja sortowania
const sortowanieBabelkowe = () => {
    //pierwsza pętla, czyli kolejne iteracje sortowania - do przedostatniego elementu, bo wiadomo, ze po pierwszej iteracji ostatni jest ok.
    for (let i = 0; i < nieposortowane.length - 1; i++) {
        //druga pętla: od drugiego elementu (why? bo odejmujemy 1 od indexu) do ostatniego.
        for (let j = 1; j < nieposortowane.length; j++) {
            // jeśli pierwszy element jest większy od drugiego, to go podmieniamy
            if (nieposortowane[j - 1] > nieposortowane[j]) {
                //tworzymy zmienną tymczasową, i tam tymczasowo umieszczamy nasz 2 element
                let zamiennik = nieposortowane[j];
                // 2 element zamieniamy z 1, większym (mamy teraz 2 takie same)
                nieposortowane[j] = nieposortowane[j - 1];
                // 1 element zamieniamy z wartością tymczasową, co nam przestawia kolejność
                nieposortowane[j - 1] = zamiennik;

            }

        }

    }
    // zwracamy ju posortowaną tablicę
    return nieposortowane;
}

//wywyołujemy funkcję w konsoli
console.log(sortowanieBabelkowe());