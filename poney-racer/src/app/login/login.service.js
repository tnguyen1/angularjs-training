angular.module('services').factory('AuthenticationService', function(CONFIG, $http, $cookies, $log) {

  var login = function(user) {
    return $http.post(CONFIG.serverBaseUrl + '/authentication', user)
      .then(function(response) {
        var token = response.data.token;
        $cookies.customAuth = token;
        // $log.info("New custom cookie: " + $cookies.customAuth);
        init();
        return token;
      });
  };

  var init = function() {
    $http.defaults.headers.common['Custom-Authentication'] = $cookies.customAuth;
    // $log.info("Using custom cookie: " + $cookies.customAuth);
  };

  var isLogged = function() {
    return $cookies.customAuth;
  };

  var logout = function() {
    delete $cookies.customAuth;
  }

  return {
    init: init,
    login: login,
    isLogged: isLogged,
    logout: logout
  }
});
