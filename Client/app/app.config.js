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

.when('/addbuyers', {
    templateUrl: './app/components/buyers/addbuyers/_addbuyers.html',
    controller: 'addbuyer'
})

.when('/productlists', { templateUrl: './app/components/products/productlists/_productlist.html', controller: 'productlistCtrl as productlist' })

          
 .when("/productdetails/:productId?", {
         templateUrl: './app/components/products/productdetails/_productDetails.html',
         controller: 'productdetailsctrl as productdetails'
 })

.when("/sourcelist/:sourceId?", { templateUrl: './app/components/sources/sourcelist/_sourcelist.html', controller: 'sourcelistCtrl as sourcelist' })

.when('/websitelist', { templateUrl: './app/components/websites/websitelist/_websitelist.html', controller: 'websitelistCtrl as websitelist' })



.when("/mediumslist:mediumId?", {
    templateUrl: "./app/components/mediums/mediumslist/_medium.html",
    controller: "mediumCtrl as medium"
})

.when("/levels:levelId?", { templateUrl: "./app/components/levels/_level.html", controller: "levelCtrl as level" })

        .otherwise({ redirectTo: '/' });

    }
    
   
})();


