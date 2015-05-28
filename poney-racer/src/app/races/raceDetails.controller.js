'use strict';

angular.module('controllers')
  .controller('RaceDetailsCtrl', function ($scope, $log, $http, $routeParams) {

    $scope.raceId = $routeParams.raceId;

    var fetchRace = function() {
      $http.get('http://localhost:8080/poneyserver/races/' + $scope.raceId)
        .then(function(response) {
          $scope.race = response.data;
        });
    };

    fetchRace();
});
