var range = 300;

$(window).on('scroll', function () {
   	 var st = $(this).scrollTop();
     $('[class^="contentTela"]').each(function () {
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        offset = offset + height / 2;
        $(this).css({ 'opacity': 1 - (st - offset + range) / range });
		console.log('offset: '+offset+' height: '+height+ ' old offset: '+$(this).offset().top);
		console.log('ST: '+st);
    });
});