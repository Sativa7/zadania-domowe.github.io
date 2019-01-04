// Na stronie jest blok z listą pracowników i ich wypłatami w bieżącym miesiącu:

//      ##kod HTML 
// Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
// Uzyskany wynik wyświetl w elemencie o ID #sum.

// Zadanie zrób z wykorzystaniem biblioteki jQuery.

// Zadanie podsyłamy z użyciem https://repl.it

// Podpowiedzi:
// - oprogramuj zdarzenie "click" przycisku #count-sum
// - pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
// - pobierz element o ID #sum i podmień mu treść na obliczoną sumę

$(function(){
$('#count-sum').click(function(){

   let suma = 0;
   $('.salary').each(function(){

      suma += parseInt($(this).text());

   });
   $('#sum').text(suma);
});

});