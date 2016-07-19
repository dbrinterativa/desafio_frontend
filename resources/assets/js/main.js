$(function() {
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		$('body').css({
			'background-attachment': 'fixed',
			'background-position': 'center ' + -(scroll * .3) + 'px'
		});
	});
});