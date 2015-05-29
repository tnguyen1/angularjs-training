'use strict';

angular.module('controllers')
  .controller('RacesCtrl', function (CONFIG, $scope, $log, $http, $location) {

    $scope.init = function() {
      $scope.races = [];
      $http.get(CONFIG.serverBaseUrl + '/races')
        .then(function(response) {
        $scope.races = response.data;
      });
    };

    $scope.openRaceDetails = function(raceId) {
      $location.path('/races/' + raceId);
    };

    // init controller
    $scope.init();
});
