(function(){
	'use strict';

    (function(){
        $.fn.isOnScreen = function(p){
            var $this = $(this),
                $window = $(window);

            return $this.offset().top <= ($window.height() - p) + $window.scrollTop();
        };
    })();

    // Preloader

    var Preloader = {
        run: function(cb) {
            var $pace               = $('.pace'),
                $paceProgress       = $pace.find('.pace-progress'),
                $preloader          = $('.preloader'),
                $loaderProgress     = $preloader.find('.loader-progress'),
                loaderProgress      = 100,
                progress            = 0,
                newProgress         = 0,
                time                = 100;

            Preloader.intervalId = setInterval(function() {
                progress = $paceProgress.attr('data-progress-text').replace('%', '');
                progress = Number(progress);

                newProgress = (loaderProgress - progress);
                $loaderProgress.attr('style', 'top: '+newProgress+'%');

                if(progress === 100){
                    clearInterval(Preloader.intervalId);
                    setTimeout(cb, time);
                }
            }, time);
        }
    };

    Pace.on('start', function() {
        $('main').css('opacity', '0');

        Preloader.run(function() {
            TweenLite.to('.preloader', .4, { alpha: 0, onComplete: function() {
                TweenLite.set('.preloader', { css: { 'display': 'none' }});
            }});
            TweenLite.to('main', .4, { alpha: 1});
        });
    });

    $(document).on('DOMContentLoaded', function() {
        Pace.restart();
    });

    // Background Parallax
    window.addEventListener('scroll', function(e) {
        // console.log(e);
    });

    document.addEventListener('scroll', function(e) {
        console.log(e);
    });

    

    // Slide Questions

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
        var $itens  = Array.prototype.slice.call(prev.target.querySelectorAll('.m-item')),
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

    // Animation

    $(window)
        .on('scroll', function(){
            var wait    = 0,
                $window = $(this);

            $('[data-ani-type]:not([data-animated])').each(function(i){
                if ($window.width() > 1024) {
                    var $this   = $(this);
                    var p       = $this.attr('data-ani-show') || 150;
                    var delay   = $this.attr('data-ani-delay') || .4;
                    var time    = $this.attr('data-ani-time') || .6;

                    delay = parseFloat(delay);

                    if ($this.isOnScreen(p)) {
                        wait += delay;
                        $this.attr('data-animated', true);

                        if ($this.attr('data-ani-type') == 'zoomIn') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, scaleX: 0, scaleY: 0, y: 0, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'fade') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'fade-top') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, y: 60, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'fade-right') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, x: -60, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'fade-bottom') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, y: -30, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'fade-left') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, x: 60, ease: Quint.easeOut});
                        } else if ($this.attr('data-ani-type') == 'zoom') {
                            TweenLite.from($this, time, {delay: wait, opacity: 0, scale: 0.7, ease: Back.easeOut});
                        }
                    }
                }
            });
        })
        .on('resize', function() {
            $(this).trigger('scroll')
        }).trigger('resize');

    // Toggle selector Sex Form
	   
    var $selector = document.querySelector('.toggle-selector .selector');

    $selector.addEventListener('click', function(e) {
        var $parent = this.parentNode,
            $radios = Array.prototype.slice.call($parent.querySelectorAll('input[type="radio"]'));;

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