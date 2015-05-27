'use strict';

angular.module('controllers')
  .controller('RegisterCtrl', function ($scope, $http, $location, $log, $timeout) {

    $scope.register = function(user) {
      $http.post('http://localhost:8080/poneyserver/users', user).
        success(function(data, status, headers, config) {
          $scope.registerSuccess = true;
          $scope.registerError = false;
          $scope.registerErrorMessage = "";
          $timeout(function() { $location.path('/'); }, 3000);
        }).
        error(function(data, status, headers, config) {
          $log.log('Uh-oh! Failed to create user');
          $log.error(data);
          $scope.registerSuccess = false;
          $scope.registerError = true;
          $scope.registerErrorMessage = data.message;
        });
    }
  });
