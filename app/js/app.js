(function () {

'use strict';


  angular.module('Splash', ['ngRoute', 'ngAnimate', 'angular-scroll-animate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "templates/main.html",
          controller: "AnimController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('Splash')

  .controller('AnimController', [
    '$scope',
    function($scope) {
      $scope.animateElementIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeIn');
      };

      $scope.bounceElementIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated bounceIn');
      };

      $scope.animateElementOut = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated fadeIn');
      };

      $scope.bounceElementOut = function($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated bounceIn');
      };

    }
  ]);

}());