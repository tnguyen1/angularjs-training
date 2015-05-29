'use strict';

angular.module('controllers')
.controller('LiveCtrl', function (CONFIG, $scope, $log, $http, $routeParams, $location) {

  $scope.raceId = $routeParams.raceId;
  $scope.firstPoneys = [];

  var fetchRace = function() {
    return $http.get(CONFIG.serverBaseUrl + '/races/' + $scope.raceId)
      .then(function(response) {
        $scope.race = response.data;
      });
  };

  var startRace = function() {
    return $http.post(CONFIG.serverBaseUrl + '/running', $scope.raceId)
      .then(function(response) {
        $log.info("Started race " + $scope.raceId);
      });
  };

  var updateLeaders = function() {
    var firstPoneys = $scope.firstPoneys;
    var maxPos = 0;
    for (var i = 0; i < $scope.positions.length; i++) {
      var p = $scope.positions[i];
      if (p.position >= maxPos) {
        if (p.position == maxPos) {
          firstPoneys.push(p.poney);
        }
        else {
          firstPoneys = [p.poney];
        }
        maxPos = p.position;
      }
      $scope.firstPoneys = firstPoneys;
    }
  };

  var monitorPositions = function() {
    var socket = new SockJS(CONFIG.serverBaseUrl + '/race');
    var stompClient = Stomp.over(socket);

    stompClient.connect('', function() {
      stompClient.subscribe('/topic/' + $scope.raceId, function(message) {
        $scope.positions = angular.fromJson(message.body).positions;
        $scope.$apply();
        fetchRace();
        updateLeaders();
      });
    });
  }

  // init controller
  fetchRace()
    .then(function() {
      if ($scope.race.status == 'READY') {
        startRace();
      }
    })
    .then(function() {
      monitorPositions();
    });
});
