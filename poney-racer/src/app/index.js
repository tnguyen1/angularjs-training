'use strict';

angular.module('constants', []);

angular.module('directives', []);

angular.module('services', ['constants', 'ngCookies']);

angular.module('controllers', ['services', 'directives', 'ngMessages']);

angular.module('poneyRacer', ['controllers', 'ngRoute', 'ui.bootstrap'])
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
      .when('/races/:raceId/live', {
        templateUrl: 'app/races/live.html',
        controller: 'LiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function(AuthenticationService) {
    AuthenticationService.init();
  })
;
