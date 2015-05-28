'use strict';

angular.module('controllers')
  .controller('LoginCtrl', function ($scope, $log, $location, AuthenticationService) {

    $scope.login = function(user) {
      AuthenticationService.login(user)
        .then(function() {
          $log.info('Login successful!')
          $scope.failedLogin = false;
          $location.path('/');
        })
        .catch(function() {
          $log.error('Login failed!');
          $scope.failedLogin = true;
        });
    };

  });
