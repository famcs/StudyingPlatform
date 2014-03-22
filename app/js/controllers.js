'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('LoginCtrl', ['$scope', '$location', 'authService',
    function($scope, $location, authService) {
        $scope.signIn = function(user) {
            var onSuccess = function() {
                $location.path("dashboard");
            }
            var onError = function() {
                alert("ERROR");
            }
            authService.signIn(user, onSuccess, onError);
        }
    }
]).
controller('DashboardCtrl', ['$scope', '$location', 'authService',
    function($scope, $location, authService) {
        if (!authService.checkRole('admin')) { // TODO: fix role to 'user' later
            $location.path("login");
        }
    }
]);