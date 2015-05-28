'use strict';

angular.module('controllers')
  .controller('RacesCtrl', function ($scope, $log, $http, $location) {

    $scope.init = function() {
      $scope.races = [];
      $http.get('http://localhost:8080/poneyserver/races')
        .then(function(response) {
        $scope.races = response.data;
      })
    };

    $scope.openRaceDetails = function(raceId) {
      $location.path('/races/' + raceId);
    };

    // init controller
    $scope.init();
});
