//console.log("test");

// 1. Stwórz element button
// 2. Pod elementem button stwórz pięć paragrafów z treścią "To jest paragraf
// /numer_paragrafu/" - jako /numer_paragrafu/ nadaj numery kolejno 1,
// 2, 3, 4, 5
// 3. Po kliknięciu w przycisk ostatni paragraf ma zostać przeniesiony na
// pierwszą pozycję
// 4. Kolejne kliknięcia mają przenosić aktualnie ostatni paragraf na
// pierwszą pozycję
// 5. Stwórz kolejny przycisk (element button), który będzie miał działanie odwrotne, czyli będzie przenosił paragrafy z pierwszej pozycji na ostatnią

// Zadanie podsyłamy z użyciem https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - pamiętaj, że skrypty zawsze podpinamy na końcu, a biblioteka jQuery ma być podpięta powyżej Twojego skryptu.
// - bibliotekę jQuery podepnij w wersji zdalnej z serwera CDN.

$(function(){
   $('#button').click(function(){
      $('p').last().insertBefore($('p').first())
   })

   $('body').append('<button id="drugiButton">I odwrotnie');
      $('#drugiButton').click(function(){
         $('p').first().insertAfter($('p').last())
      })
})