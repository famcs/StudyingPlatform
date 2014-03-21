'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('SignInCtrl', ['$scope', '$location', 'authService',
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
controller('SignUpCtrl', ['$scope', '$location', 'authService',
     function($scope, $location, authService) {
        $scope.signUp = function(user) {
            var onSuccess = function() {
                alert("Success signup");
                $location.path("login");
            }
            var onError = function() {
                alert("Fail signup");
                $location.path("signup");
            }
            authService.signUp(user, onSuccess, onError);
        }
    }
]).
controller('DashboardCtrl', ['$scope', '$location', 'authService',
    function($scope, $location, authService) {
        if (!authService.checkRole('admin')) { // TODO: fix role to 'user' later
            $location.path("login");
        }
    }
]).
controller('SignOutCtrl', ['$scope', '$location', 'authService',
    function($scope, $location, authService) {
        if (authService.isSignedIn()) {
            authService.signOut();
        }
        $location.path("");
    }
]).
controller('HomeCtrl', ['$scope',
    function($scope) {

    }
]);