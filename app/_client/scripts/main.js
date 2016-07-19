window.onload = function() {

    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!hasClass(el, className)) el.className += " " + className
    }

    onePageScroll(".main", {
        sectionContainer: ".page", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease-in-out", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {

            if (location.hash === "#2") {

                var boxes = document.getElementsByClassName("icon-anim");
				boxes = [].slice.call(boxes);
				var timer = 1500;
				var count = 0;

				boxes.forEach(function(box, index, array){
					setTimeout(function(){
						addClass(box, "animate")
					}, (timer + count));
					count+=timer;
				});

				var txt = document.getElementsByClassName("txt-anim");
				txt = [].slice.call(txt);
				var timer = 1500;
				var count = 0;

				txt.forEach(function(txt, index, array){
					setTimeout(function(){
						addClass(txt, "animate")
					}, (timer + count));
					count+=timer;
				});

            };
        }, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false // You can fallback to normal page scroll by defining the width of the browser in which
            // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
            // the browser's width is less than 600, the fallback will kick in.

    });

    var video = document.getElementById("bgvid");
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.preload = "auto";
    video.play();
}
