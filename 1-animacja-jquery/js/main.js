// 1. Stwórz przycisk - (element button)
// 2. Pod przyciskiem stwórz kwadrat (znacznik div) o wysokości i
// szerokości 200px oraz kolorze czerwonym
// 3. Po kliknięciu w przycisk kwadrat ma się przesunąć w prawo o 100px
// oraz ma się zmniejszyć do rozmiaru 100px na 100px - wykorzystaj do
// tego metodę animate() - animacja ma trwać 3 sekundy
// 4. Po zakończonej animacji zmień kolor kwadratu na niebieski - animacja
// zmiany ma trwać 5 sekund
// 5. Gdy kwadrat zmieni kolor na niebieski wyświetl wewnątrz niego napis
// w nagłówku h2 "Animacja zakończona"

// Zadanie podsyłamy z użyciem https://repl.it

// Podpowiedź przed wysłaniem zadania do sprawdzenia:
// - pamiętaj, że skrypty zawsze podpinamy na końcu, a biblioteka jQuery ma być podpięta powyżej Twojego skryptu.
// - bibliotekę jQuery podepnij w wersji zdalnej z serwera CDN.

$(function() {

   $("#button").click(function() {
      $("#kwadrat").animate({
         "left": "100px",
         "height": "100px",
         "width": "100px"
      }, 3000, zmienKolor);
   });

   function zmienKolor() {
      setTimeout(naglowek, 3000)
      $('#kwadrat').css({'background-color': 'blue',  'transition': '5s'});
    
    }

   function naglowek() {
      $("#kwadrat").html("<h2>Animacja zakończona</h2>")
   }
});