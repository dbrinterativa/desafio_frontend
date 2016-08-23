"use strict";

$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

let main = function () {

	let whoCares = function () {
		
		$('.who-cares-title').css('visibility', 'visible');
		
		$('.who-cares-title').animateCss('zoomInUp');

		$('.who-cares-title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).next().css('visibility', 'visible');
			$(this).next().animateCss('bounceInDown');
		});
	}

	let madSkills = function () {
		$('.my-skills-list li span i + i').each(function(idx, e) {

			let $element = $(e);
			let $parent = $(e).parent();
			let $grandpa = $parent.parent();
			let $ninja = $grandpa.children('.ninja');

			$('.fa-coffee, .fa-wpforms, .fa-graduation-cap').fadeIn();

			$parent.children('img').remove();

			if (e.className.indexOf('fa-wpforms') > 0) {
				setMadskills($parent, $element, $ninja, "images/spider-ok.png", 1000);
			}

			if (e.className.indexOf('fa-coffee') > 0) {
				setMadskills($parent, $element, $ninja, "images/watchout-guys.png", 3000);
			}

			if (e.className.indexOf('fa-graduation-cap') > 0) {
				setMadskills($parent, $element, $ninja, "images/not-bad.png", 4500);
			}
		});
	}

	let setMadskills = function($parent, $element, $ninja, image, timeOut) {

		setTimeout(function() {
			$parent.append('<img src="' + image + '" class="" alt="">').fadeIn('slow');

			$ninja.css('visibility', 'visible').slideDown('slow');

			$element.fadeOut('fast');
		}, timeOut);
	}	

	return {
		madSkills: madSkills,
		whoCares: whoCares
	}
}


$(document).ready(function() {
	$('form').parsley()
	.on('form:success', function(field) {
		$('.parsley-success').each(function() {
			$(this).css('border', '1px solid green');
		});
	})
	.on('form:error', function() {
		$('.fp-scroller, .iScrollIndicator').css('-webkit-transform', 'translate(0px, 0px)');

		$('.parsley-error').each(function() {
			$(this).css('border', '1px solid crimson');
			$(this).animateCss('rubberBand');
		});
	})
	.on('form:submit', function() {

		return false;
	});

	$('#fullpage').fullpage({
		anchors: ['intro', 'mad-skills', 'who-cares', 'no-problemo', 'form-cadastro'],
		sectionsColor: ['#323232', '#323232', '#323232', '#323232', '#CCCBC4'],
		navigation: true,
		navigationPosition: 'right',
		scrollOverflow: true,
		navigationTooltips: ['Encontramos!', 'Quem Sou', 'Who cares, anyway?'],
		responsiveWidth: 1100,
		afterLoad: function(anchorLink, index) {
			switch (anchorLink) {
				case 'mad-skills' :
				main().madSkills();
				break;
				case 'who-cares' :
				main().whoCares();
				break;
			}
		}
	});
});