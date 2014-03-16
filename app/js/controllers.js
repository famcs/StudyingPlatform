'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('LoginCtrl', ['$scope', '$location', 'loginService',
    function($scope, $location, loginService) {
        $scope.signIn = function(user) {
            var onSuccess = function() {
                $location.path("dashboard");
            }
            var onError = function() {
                alert("ERROR");
            }
            loginService.signIn(user, onSuccess, onError);
        }
    }
]).
controller('DashboardCtrl', ['$scope', '$location', 'userService',
    function($scope, $location, userService) {
        userService.getUserInfo().success(function(response) {
            $scope.username = response.username;
        }).error(function(response) {
            $location.path("login");
            alert("Forbidden");
        })

    }
]);