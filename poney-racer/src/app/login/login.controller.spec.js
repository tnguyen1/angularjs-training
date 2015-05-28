'use strict';

describe('Login controller', function() {

  var scope, $q;

  beforeEach(module('services'));
  beforeEach(module('controllers'));

  beforeEach(inject(function($rootScope, $controller, _$q_) {
    scope = $rootScope.$new();
    $controller('LoginCtrl', {
      $scope: scope
    });
    $q = _$q_;
  }));

  it('should pass login with valid credentials', inject(function(AuthenticationService) {
    spyOn(AuthenticationService, 'login').and.returnValue('mySecretToken');
    expect(scope.failedLogin).toBeFalsy();
  }));

  it('should fail login with invalid credentials', inject(function(AuthenticationService) {
    spyOn(AuthenticationService, 'login').and.returnValue($q.reject('Fake login rejection'));
    expect(scope.failedLogin).toBeTruthy();
  }));

});
