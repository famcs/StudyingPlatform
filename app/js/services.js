'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
factory('loginService', function($http) {

    var loginAPI = {};

    loginAPI.signIn = function(user) {
        $http.post(
            '/oauth2/token', {
                grant_type: "password",
                client_id: "angular_client",
                client_secret: "zxcVFR4815162342",
                username: user.username,
                password: user.password
            }
        ).success(function(response) {
            // a successful response will return
            // the "bearer" token which is registered
            // to the $httpProvider
            $http.defaults.headers.common.Authorization = "Bearer " + response.access_token
        }).error(function(response) {
            // error handling to some meaningful extent
        })
        //return $http.post('/login', user);
        return "";
    }

    return loginAPI;
}).
factory('userService', function($http) {

    var userAPI = {};

    userAPI.getUserInfo = function() {
        return $http.get('/api/userInfo');
    }

    return userAPI;
});