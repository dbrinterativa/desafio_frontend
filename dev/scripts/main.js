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
                time                = 300;

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
            TweenLite.to('.preloader', .3, { delay: .2, alpha: 0, onComplete: function() {
                // TweenLite.set('.preloader', { css: { 'display': 'none' }});
            }});
            TweenLite.to('main', .4, { delay: .2, alpha: 1});
        });
    });

    $(document).on('DOMContentLoaded', function() {
        Pace.start();
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
            var $header = document.querySelector('header');

            $(this).trigger('scroll');

            if($(this).width() <= 959) {
                $header.style.height = $(this).height()+'px';
            } else {
                $header.setAttribute('style', '');
            }
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

    var validator = new FormValidator('form-box', [{
        name: 'form-name',
        display: '*Favor informar seu nome.',
        rules: 'required'
    },{
        name: 'form-email',
        display: '*Favor informar seu e-mail.',
        rules: 'required|valid_email'
    },{
        name: 'form-old',
        display: 'Favor informar Idade.',
        rules: 'required|is_natural'
    },{
        name: 'form-salary',
        display: 'Favor informar pretensão salarial.',
        rules: 'required'
    },{
        name: 'form-phone',
        display: 'Favor informar seu telefone.',
        rules: 'required|callback_check_phone'
    },{
        name: 'form-fb',
        display: 'Favor informar o endereço corretamente',
        rules: 'required|callback_check_facebook'
    },{
        name: 'form-tt',
        display: 'Favor informar o endereço corretamente',
        rules: 'required|callback_check_twitter'
    },{
        name: 'form-gh',
        display: 'Favor informar o endereço corretamente',
        rules: 'required|callback_check_github'
    },{
        name: 'form-message',
        display: 'Mande uma mensagem de no minimo 10 palavras',
        rules: 'required|min:10'
    }], function(errors, event) {
        event.preventDefault(0);

        var inputs  = Array.prototype.slice.call(event.target.querySelectorAll('.input > *'));
        
        inputs.forEach(function(element) {
            element.classList.remove('error');
        });

        if(errors.length > 0) {
            errors.forEach(function(error) {
                TweenLite.to(window, .6, { scrollTo: '#form-box' , ease: Expo.easeInOut , onComplete: function() {
                    error.element.nextElementSibling.textContent = error.display;
                    error.element.classList.add('error');
                }});
            });            
        } else {
            TweenLite.to('.inner-form-box', .3, { alpha: 0, onComplete:function() {
                TweenLite.set('.message-success', { zIndex: 5 });
                TweenLite.to('.message-success-text', .3, { alpha: 1 });
            }});
        }
    });

    var reFacebookPerfilUrl = /(https?:\/\/)(www)?\.?(facebook)\.([a-zA-Z0-9_]+)\.?([a-zA-Z0-9_]*)?\/?([a-zA-Z0-9_\.]*)/ig,
        reTwitterPerfilUrl = /(https?:\/\/)(www)?\.?(twitter)\.([a-zA-Z0-9_]+)\.?([a-zA-Z0-9_]*)?\/?([a-zA-Z0-9_\.]*)/ig,
        reGithubPerfilUrl = /(https?:\/\/)(www)?\.?(github)\.([a-zA-Z0-9_]+)\.?([a-zA-Z0-9_]*)?\/?([a-zA-Z0-9_\.]*)/ig;

    validator.registerCallback('check_phone', function(value) {
        if (value.match(/\(?\d{2}\)?\s?\d?\d{4}-?\d{4}/)) {
            return true;
        }
        return false;
    });

    validator.registerCallback('check_facebook', function(value) {
        if (value.match(reFacebookPerfilUrl)) {
            return true;
        }
        return false;
    });

    validator.registerCallback('check_twitter', function(value) {
        if (value.match(reTwitterPerfilUrl)) {
            return true;
        }
        return false;
    });

    validator.registerCallback('check_github', function(value) {
        if (value.match(reGithubPerfilUrl)) {
            return true;
        }
        return false;
    });

}());