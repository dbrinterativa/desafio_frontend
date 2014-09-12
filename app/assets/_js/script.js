//  **************************************
//  * Scroll anchors                     *
//  **************************************

$("a[href*=#]").on('click', function(event){
    var href = $(this).attr("href");
    if ( /(#.*)/.test(href) ){
      var hash = href.match(/(#.*)/)[0];
      var path = href.match(/([^#]*)/)[0];

      if (window.location.pathname == path || path.length == 0){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
        window.location.hash = hash;
      }
    }
});