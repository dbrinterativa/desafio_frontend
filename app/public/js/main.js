!function e(n,o,t){function a(r,c){if(!o[r]){if(!n[r]){var u="function"==typeof require&&require;if(!c&&u)return u(r,!0);if(i)return i(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[r]={exports:{}};n[r][0].call(l.exports,function(e){var o=n[r][1][e];return a(o?o:e)},l,l.exports,e,n,o,t)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<t.length;r++)a(t[r]);return a}({1:[function(e,n,o){window.onload=function(){function e(e,n){e.classList?e.classList.add(n):hasClass(e,n)||(e.className+=" "+n)}onePageScroll(".main",{sectionContainer:".page",easing:"ease-in-out",animationTime:1e3,pagination:!0,updateURL:!0,beforeMove:function(e){},afterMove:function(n){if("#2"===location.hash){var o=document.getElementsByClassName("icon-anim");o=[].slice.call(o);var t=1500,a=0;o.forEach(function(n,o,i){setTimeout(function(){e(n,"animate")},t+a),a+=t});var i=document.getElementsByClassName("txt-anim");i=[].slice.call(i);var t=1500,a=0;i.forEach(function(n,o,i){setTimeout(function(){e(n,"animate")},t+a),a+=t})}},loop:!1,keyboard:!0,responsiveFallback:!1});var n=document.getElementById("bgvid");n.autoplay=!0,n.loop=!0,n.controls=!1,n.preload="auto",n.play()}},{}]},{},[1]);
