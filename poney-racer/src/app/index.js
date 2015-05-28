'use strict';

angular.module('services', ['ngCookies']);

angular.module('controllers', ['ngMessages']);

angular.module('directives', []);

angular.module('poneyRacer', ['services', 'controllers', 'directives', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/races', {
        templateUrl: 'app/races/races.html',
        controller: 'RacesCtrl'
      })
      .when('/races/:raceId', {
        templateUrl: 'app/races/raceDetails.html',
        controller: 'RaceDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function(AuthenticationService) {
    AuthenticationService.init();
  })
;
