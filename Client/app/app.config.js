(function () {
    'use strict';

    angular.module('PerformanceTrackerApp')
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: './app/components/buyers/list/_list.html',
                controller: 'buyerListCtrl as buyerlist'
            })
        .when("/communications/list", {
            templateUrl: './app/components/communications/list/_communicationlist.html',
            controller: 'communicationlist as communication'
        })
        .otherwise({ redirectTo: '/' });;
       
    }
})();


