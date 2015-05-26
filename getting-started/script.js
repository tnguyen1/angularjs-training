var app = angular.module('app', ['ui.bootstrap']);

app.controller('FormController', function($scope) {
  $scope.formctrl = {};
  $scope.formctrl.name = 'Truc';
  $scope.formctrl.age = '30';
  $scope.submit = function() {
    $scope.formctrl.message = "[parent] Congratulations " + $scope.formctrl.name + ", you are " + $scope.formctrl.age + "!";
  };
});

app.controller('NestedController', function($scope) {
  $scope.submit = function() {
    $scope.formctrl.message = "[child] Congratulations " + $scope.formctrl.name + "!";
  };
});

app.controller('FilterController', function($scope) {
});

app.filter('majority', function() {
  return function(input) {
    var message = input >= 18 ? 'Oui' : 'No';
    return message;
  }
});
