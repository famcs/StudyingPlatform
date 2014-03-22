'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/signin', {
            templateUrl: 'static/html/signin.html',
            controller: 'SignInCtrl'
        });
        $routeProvider.when('/signout', {
            template: "",
            controller: 'SignOutCtrl'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'static/html/dashboard.html',
            controller: 'DashboardCtrl'
        });
        $routeProvider.when('/', {
            templateUrl: 'static/html/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
]).
controller('MainCtrl', ['$scope', 'authService',
    function($scope, authService) {
        $scope.$watch(authService.isSignedIn, function(isSignedIn) {
            $scope.isSignedIn = isSignedIn;
            $scope.currentUser = authService.currentUser();
            $scope.checkRole = authService.checkRole;
        });
    }
]);