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

    $scope.bet = function(poneyName) {
      var bet = {'raceId': $scope.raceId, 'poney': poneyName};
      $http.post('http://localhost:8080/poneyserver/bets', bet)
        .then(function(response) {
          $log.info("Betted on poney " + poneyName);
          fetchRace();
        });
    };

    $scope.cancelBet = function() {
      $http.delete('http://localhost:8080/poneyserver/bets/' + $scope.raceId)
        .then(function(response) {
          $log.info("Bet cancelled for race " + $scope.raceId);
          fetchRace();
        });
    };

    fetchRace();
});
