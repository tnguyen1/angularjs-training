'use strict';

angular.module('controllers')
.controller('LiveCtrl', function ($scope, $log, $http, $routeParams, $location) {

  $scope.raceId = $routeParams.raceId;

  var init = function() {
    $http.post('http://localhost:8080/poneyserver/running', $scope.raceId)
      .then(function(response) {
        $log.info("Started race " + $scope.raceId);
      });
  };

  init();

});
