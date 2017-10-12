(function () {
    'use strict';
    

    angular
        .module('PerformanceTrackerApp')
        .controller('productdetailsctrl', productdetailsctrl);

    productdetailsctrl.$inject = [ '$rootScope','$location','mainService','$routeParams']

    function productdetailsctrl($rootScope, $location, mainService, $routeParams) {
        /* jshint validthis:true */
        $rootScope.title = "Product Details";
        var vm = this;
        vm.title = 'productDetails';
        alert("ProductDetails");
        vm.product = {};
        vm.productId;
        vm.GetProductById = GetProductById;
        vm.SaveProduct = SaveProduct;



        active();

        function active() {
            vm.productId = $routeParams.productId;
            if (vm.productId > 0) {
                GetProductById(vm.productId);
            }
        }
        function GetProductById() {
            mainService.GetProductById(vm.productId).then(function (res) {
                vm.product = res.data;
                console.log("GetProductById", vm.product);
            }, function () { });
        }


        function SaveProduct() {
            mainService.SaveProducts(vm.product).then(function (res) {
                vm.source = res.data;
                console.log(res);
                console.log("Saved data is ", vm.source);
            }, function () { });
        }

    }
})();
