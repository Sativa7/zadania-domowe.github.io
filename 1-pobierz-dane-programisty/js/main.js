
$(function () {
   $("button").click(function(){
      $.ajax({
         url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
         dataType: 'json',
         success: function (resultJSON) {
         //console.log(resultJSON);

         let daneprogramisty = resultJSON;
         let nowydiv = document.createElement("div");

         $(nowydiv).html(`
         Imie: ${daneprogramisty.imie}, <br>
         Nazwisko: ${daneprogramisty.nazwisko}, <br>
         Zawod: ${daneprogramisty.zawod}, <br>
         Firma: ${daneprogramisty.firma}`)

       $("body").append(nowydiv);

         },

         onerror: function (msg) {
         console.log(msg);
         }
         });

   });
});

