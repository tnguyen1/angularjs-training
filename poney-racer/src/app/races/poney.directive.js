angular.module('directives').directive('poney', function() {
  return {
    scope: {
      poneyName: '@name',
      isBetted: '=betted'
    },
    templateUrl: 'app/races/poney.template.html'
  };
});
