'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'html/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/dashboard', {templateUrl: 'html/dashboard.html', controller: 'DashboardCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
