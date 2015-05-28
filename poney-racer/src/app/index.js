'use strict';

angular.module('services', ['ngCookies']);

angular.module('controllers', ['ngMessages']);

angular.module('poneyRacer', ['services', 'controllers', 'ngRoute', 'ui.bootstrap'])
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
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function(AuthenticationService) {
    AuthenticationService.init();
  })
;
