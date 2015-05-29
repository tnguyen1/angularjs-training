'use strict';

angular.module('controllers')
  .controller('RegisterCtrl', function (CONFIG, $scope, $http, $location, $log, $timeout) {

    $scope.register = function(user) {
      $http.post(CONFIG.serverBaseUrl + '/users', user).
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
    };

    var createUser = function(firstname, lastname, email, birthYear, login, password) {
      return {
        'firstName': firstname,
        'lastName': lastname,
        'email': email,
        'birthYear': birthYear,
        'login': login,
        'password': password
      };
    };

    $scope.registerTestUsers = function() {
      var testUsers = [];
      testUsers.push(createUser('Roger', 'Federer', 'roger@itf.com', 1976, 'roger', 'a'));
      testUsers.push(createUser('Raphael', 'Nadal', 'rafa@itf.com', 1986, 'rafa', 'a'));
      testUsers.push(createUser('Jo Wilfried', 'Tsonga', 'jo@itf.com', 1985, 'jo', 'a'));
      testUsers.push(createUser('Stanislas', 'Wawrinka', 'stan@itf.com', 1985, 'stan', 'a'));
      testUsers.push(createUser('Novak', 'Djokovic', 'nole@itf.com', 1986, 'nole', 'a'));
      for (var i = 0; i < testUsers.length; i++) {
        $scope.register(testUsers[i]);
      }
    };

  });
