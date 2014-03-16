'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('LoginCtrl', ['$scope', '$location', 'loginService',
    function($scope, $location, loginService) {
        $scope.signIn = function(user) {
            loginService.signIn(user);

            /*.success(function(response) {
                if (response == "success") {
                    $location.path("dashboard");
                } else {
                    alert("ERROR");
                }
            });*/
        }
    }
]).
controller('DashboardCtrl', ['$scope', 'userService',
    function($scope, userService) {
        userService.getUserInfo().success(function(response) {
            $scope.username = response.username;
        }).error(function(response) {
            // error handling to some meaningful extent
        })

    }
]);