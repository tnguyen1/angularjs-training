'use strict';

describe('Main controller', function() {

  var scope, $controller, $httpBackend;

  beforeEach(module('controllers'));

  beforeEach(inject(function($rootScope, _$controller_, _$httpBackend_) {
    scope = $rootScope.$new();
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should define 2 users', inject(function($controller) {
    var fakeUsers = [];
    fakeUsers.push({'login':'ced'});
    fakeUsers.push({'login':'truc'});

    $httpBackend.expectGET('http://localhost:8080/poneyserver/users')
      .respond(fakeUsers);
    $controller('MainCtrl', {
      $scope: scope
    });
    $httpBackend.flush();

    expect(angular.isArray(scope.users)).toBeTruthy();
    expect(scope.users.length).toBe(2);
  }));

});
