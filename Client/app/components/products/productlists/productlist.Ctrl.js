(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('productlistCtrl', productlistCtrl);

    productlistCtrl.$inject = ['$rootScope','$location','mainService'];

    function productlistCtrl($rootScope,$location,mainService) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "ProductList";
        vm.title = 'productlist';
        //alert("Product");

        vm.product = {};

        activate();

        function activate() {
      
            mainService.GetProducts().then(
                function (response) { vm.product = response.data.product; console.log("vm.product",vm.product); },
                function (error) { console.log(error); });

        }
    }
})();
