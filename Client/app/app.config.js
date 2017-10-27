/// <reference path="components/products/_products.html" />
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

.when("/buyerdetails/:buyerId?", {
    templateUrl: './app/components/buyers/buyerdetails/_buyerdetails.html',
    controller: 'buyerdetailsCtrl as buyerdetails'
        })
 //
   .when("/followupdetails/:followupId?", {
    templateUrl: './app/components/communications/followupdetails/_followup.html',
    controller: 'followupCtrl as followup'
       })
//

  .when('/products/:productId?', { templateUrl: './app/components/products/_products.html', controller: 'productsCtrl as product' })

          
 

   .when("/sources/:sourceId?", { templateUrl: './app/components/sources/_sourcelist.html', controller: 'sourcelistCtrl as sourcelist' })

  .when("/websites/:websiteId?", { templateUrl: './app/components/websites/_websitelist.html', controller: 'websitelistCtrl as websitelist' })



  .when("/mediums/:mediumId?", {
    templateUrl: "./app/components/mediums/_medium.html",
    controller: "mediumCtrl as medium"
      })

  .when("/levels/:levelId?", { templateUrl: "./app/components/levels/_level.html", controller: "levelCtrl as level" })

    //testnew
  .when("/communicationlist", { templateUrl: "./app/components/communications/communicationlist/_communicationlist.html", controller: "communicationlistCtrl as communicationlist" })
    //



  .when("/designations/:DesignationId?", { templateUrl: "./app/components/designations/_designations.html",  controller: "designationCtrl as designation" })

  .when("/status/:statusId?", {
    templateUrl: "./app/components/status/_status.html",
    controller: "StatusCtrl as status"
     })

  .otherwise({ redirectTo: '/' });

    }
    
   
})();


