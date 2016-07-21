(function(){
	'use strict';

    var Slide = {
        time: 4000,
        run: function() {
            Slide.clearinterval = setInterval(function(){
                $('.m-scooch').scooch('next');
            }, Slide.time);
        }
    };

    $('.m-scooch').scooch();

    Slide.run();

    $('.m-scooch').on('afterSlide', function(prev, newIdx) {
        var $itens  = [].slice.call(prev.target.querySelectorAll('.m-item')),
            $active = prev.target.querySelector('.m-active');

        var idx = $itens.indexOf($active);
        clearInterval(Slide.clearinterval);
        Slide.run();

        if(idx === 2) {
            setTimeout(function(){
                $('.m-scooch').scooch('move', 1);
            }, Slide.time);
        }
    });
	   
    var $selector = document.querySelector('.toggle-selector .selector');

    $selector.addEventListener('click', function(e) {
        var $parent = this.parentNode,
            $radios = [].slice.call($parent.querySelectorAll('input[type="radio"]'));;

        $parent.classList.toggle('toggled');
        $radios.forEach(function($el){
            $el.setAttribute('checked', false);
        });

        if($parent.classList.contains('toggled')) {
            $parent.querySelector('input[val="F"]').setAttribute('checked', true);
        } else {
            $parent.querySelector('input[val="M"]').setAttribute('checked', true);
        }
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        var a = this.querySelector('input[checked="true"]');

        return false;
    });

}());