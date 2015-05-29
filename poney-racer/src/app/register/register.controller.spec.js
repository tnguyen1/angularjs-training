'use strict';

describe('Register controller', function() {

  var scope, $httpBackend, $timeout, $location, config;

  beforeEach(module('controllers'));

  beforeEach(inject(function($rootScope, $controller, _$httpBackend_, _$timeout_, _$location_, CONFIG) {
    scope = $rootScope.$new();
    $controller('RegisterCtrl', {
      $scope: scope
    });
    $httpBackend = _$httpBackend_;
    $timeout = _$timeout_;
    $location = _$location_;
    config = CONFIG;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should register one new user', function() {
    $httpBackend.expectPOST(config.serverBaseUrl + '/users')
      .respond(201, {'token':'roger'});
    scope.register({'login': 'roger'});

    $httpBackend.flush();
    $timeout.flush();

    expect(scope.registerSuccess).toBeTruthy();
    expect(scope.registerError).toBeFalsy();
    expect($location.url()).toEqual('/');
  });

  it('should reject existing user registration', function() {
    var msg = 'The login is already in use';
    $httpBackend.expectPOST(config.serverBaseUrl + '/users')
      .respond(400, {'message':msg});
    scope.register({'login': 'roger'});

    $httpBackend.flush();

    expect(scope.registerSuccess).toBeFalsy();
    expect(scope.registerError).toBeTruthy();
    expect(scope.registerErrorMessage).toEqual(msg);
  });

});
