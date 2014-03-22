'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
factory('authService', function($http) {
    var currentUser;
    return {
        signIn: function(user, onSuccess, onError) {
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
                $http.defaults.headers.common.Authorization = "Bearer " + response.access_token;
                $http.get('/api/userInfo').success(function(response) {
                    currentUser = response;
                    onSuccess();
                }).error(function(response) {
                    onError();
                });
            }).error(function(response) {
                onError();
            })
            return "";
        },
        signOut: function() {
            currentUser = null;
        },
        isSignedIn: function() {
            return currentUser != null;
        },
        currentUser: function() {
            return currentUser;
        },
        checkRole: function(role) {
            return currentUser != null && currentUser.scope.indexOf(role) != -1;
        }
    }
});