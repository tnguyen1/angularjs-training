'use strict';

angular.module('controllers')
  .controller('RaceDetailsCtrl', function (CONFIG, $scope, $log, $http, $routeParams, $location) {

    $scope.raceId = $routeParams.raceId;

    var fetchRace = function() {
      $http.get(CONFIG.serverBaseUrl + '/races/' + $scope.raceId)
        .then(function(response) {
          $scope.race = response.data;
        });
    };

    $scope.bet = function(poneyName) {
      var bet = {'raceId': $scope.raceId, 'poney': poneyName};
      $http.post(CONFIG.serverBaseUrl + '/bets', bet)
        .then(function(response) {
          $log.info("Betted on poney " + poneyName);
          fetchRace();
        });
    };

    $scope.cancelBet = function() {
      $http.delete(CONFIG.serverBaseUrl + '/bets/' + $scope.raceId)
        .then(function(response) {
          $log.info("Bet cancelled for race " + $scope.raceId);
          fetchRace();
        });
    };

    $scope.openRaceLive = function(raceId) {
      $location.path('/races/' + raceId + '/live');
    };

    fetchRace();
});
