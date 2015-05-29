'use strict';

angular.module('controllers')
  .controller('MainCtrl', function (CONFIG, $scope, $http, $log, AuthenticationService) {

    $scope.init = function() {
      $scope.users = [];
      $http.get(CONFIG.serverBaseUrl + '/users').
        success(function(data, status, headers, config) {
          $scope.users = data;
        }).
        error(function(data, status, headers, config) {
          $log.log('Uh-oh! Failed to retrieve users from backend');
          $log.error(data);
        });
    };

    $scope.isLogged = function() {
      return AuthenticationService.isLogged();
    };

    $scope.logout = function() {
      return AuthenticationService.logout();
    }

    // init controller
    $scope.init();
  });
