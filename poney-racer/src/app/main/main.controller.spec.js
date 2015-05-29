'use strict';

describe('Main controller', function() {

  var scope, $controller, $httpBackend, config;

  beforeEach(module('controllers'));

  beforeEach(inject(function(CONFIG, $rootScope, _$controller_, _$httpBackend_) {
    scope = $rootScope.$new();
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    config = CONFIG;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should define 2 users', inject(function($controller) {
    var fakeUsers = [];
    fakeUsers.push({'login':'ced'});
    fakeUsers.push({'login':'truc'});

    $httpBackend.expectGET(config.serverBaseUrl + '/users')
      .respond(fakeUsers);
    $controller('MainCtrl', {
      $scope: scope
    });
    $httpBackend.flush();

    expect(angular.isArray(scope.users)).toBeTruthy();
    expect(scope.users.length).toBe(2);
  }));

});
