$(document).ready(function() {

  var typed = (function() {
    $(".element").typed({
      strings: ["Tem ^1000 um bom curriculum?", "Já trabalhou em agência?", "É formado na área?", "Sim?"],
      showCursor: false,

      callback: function() {

        // Show text on final string array
        $(".text-hidden-one").addClass("fadeIn");

      },

    });

  });

  $(".site-main").fullpage({
    "verticalCentered": false,
    "css3": true,
    "navigation": true,
    "navigationPosition": "right",
    sectionSelector: ".background",

    afterLoad: function(anchorLink, index) {

       if(index == 2) {
          // Inicializa a função
          $(".text-hidden-two").addClass("fadeIn");
          typed();
      }

      // Dot color navigation
      if(index == 2 || index == 4) {
        $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("background-color", "#333");
      } else {
        $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("background-color", "#fff");
      }


    }

  });


});
