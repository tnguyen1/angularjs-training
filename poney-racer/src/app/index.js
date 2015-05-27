'use strict';

angular.module('controllers', ['ngMessages']);

angular.module('poneyRacer', ['controllers', 'ngCookies', 'ngRoute', 'ui.bootstrap'])
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
      .otherwise({
        redirectTo: '/'
      });
  })
;
