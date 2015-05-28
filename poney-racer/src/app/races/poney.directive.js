angular.module('directives').directive('poney', function() {
  return {
    scope: {
      poneyName: '@name',
      isBetted: '=betted',
      isLeader: '=leader'
    },
    templateUrl: 'app/races/poney.template.html'
  };
});
