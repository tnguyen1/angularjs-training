angular.module('directives').directive('poney', function() {
  return {
    scope: {
      poneyName: '@name'
    },
    template: '<div><strong>{{ poneyName }}</strong> &raquo; <img ng-src="assets/images/poney-{{poneyName | lowercase}}.png" /></div>'
  };
});
