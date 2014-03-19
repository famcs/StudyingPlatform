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
        $routeProvider.when('/login', {
            templateUrl: 'static/html/login.html',
            controller: 'LoginCtrl'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'static/html/dashboard.html',
            controller: 'DashboardCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
]);