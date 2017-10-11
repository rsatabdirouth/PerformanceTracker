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
            .when('/addmedium', { templateUrl: './app/components/addmedium/_medium.html', controller: 'medium' })

             .when("/productdetails/:productId?", {
                 templateUrl: './app/components/products/productdetails/_productDetails.html',
                 controller: 'productdetailsctrl as productdetails'
             })
.when('/sourcelist', { templateUrl: './app/components/sources/sourcelist/_sourcelist.html', controller: 'sourcelistCtrl as sourcelist' })
        .otherwise({ redirectTo: '/' });

    }
    
    
   
})();


