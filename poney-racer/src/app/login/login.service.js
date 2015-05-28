angular.module('services').factory('AuthenticationService', function($http, $cookies, $log) {

  var login = function(user) {
    var payload = {'login': user.login, 'password': user.password};
    return $http.post('http://localhost:8080/poneyserver/authentication', payload)
      .then(function(response) {
        var token = response.data.token;
        $cookies.customAuth = token;
        $log.info("New custom cookie: " + $cookies.customAuth);
        init();
        return token;
      });
  };

  var init = function() {
    $http.defaults.headers.common['Custom-Authentication'] = $cookies.customAuth;
    $log.info("Using custom cookie: " + $cookies.customAuth);
  };

  return {
    init: init,
    login: login
  }
});
