'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('topMenu', function() {
    return {
        restrict: 'AE',
        templateUrl: 'static/html/directives/top-menu.html'
    };
});