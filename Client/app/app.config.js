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

.when("/buyerdetails/:buyerId?", {
    templateUrl: './app/components/buyers/buyerdetails/_buyerdetails.html',
    controller: 'buyerdetailsCtrl as buyerdetails'
})

.when('/productlists', { templateUrl: './app/components/products/productlists/_productlist.html', controller: 'productlistCtrl as productlist' })

          
 .when("/productdetails/:productId?", {
     templateUrl: './app/components/products/productdetails/_productDetails.html',
     controller: 'productdetailsctrl as productdetails'
 })

.when("/sourcelist/:sourceId?", { templateUrl: './app/components/sources/sourcelist/_sourcelist.html', controller: 'sourcelistCtrl as sourcelist' })

.when("/websites/:websiteId?", { templateUrl: './app/components/websites/_websitelist.html', controller: 'websitelistCtrl as websitelist' })



.when("/mediumslist/:mediumId?", {
    templateUrl: "./app/components/mediums/mediumslist/_medium.html",
    controller: "mediumCtrl as medium"
})

.when("/levels/:levelId?", { templateUrl: "./app/components/levels/_level.html", controller: "levelCtrl as level" })

.when("/communicationdetails/:communicationId?", { templateUrl: "./app/components/communications/communicationdetails/_communicationdetails.html", controller: "communicationDetailsCtrl as communicationdetails" })



.when("/designations/:DesignationId?", { templateUrl: "./app/components/designations/_designations.html", controller: "designationCtrl as designation" })

.when("/status/:statusId?", {
    templateUrl: "./app/components/status/_status.html",
    controller: "StatusCtrl as status"
})

.otherwise({ redirectTo: '/' });

    }
    
   
})();


