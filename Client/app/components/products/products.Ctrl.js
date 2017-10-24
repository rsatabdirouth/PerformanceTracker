(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('productsCtrl', productsCtrl);

    productsCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function productsCtrl($rootScope, $routeParams, mainService, $location)
    {
        /* jshint validthis:true */

        //scope declaration
        var vm = this;

        //title part
        $rootScope.title="Product Lists"
        vm.title = 'products';
        vm.productId;

        //initialization of empty array and object and save,get operation
        vm.products = [];
        vm.product = {};
        vm.GetProductById = GetProductById;
        vm.SaveProducts = SaveProducts;

        //pagination sorting and filter
        vm.limit = 5;
        vm.limitChange = limitChange;
        vm.productidchange = productidchange;
       
        vm.Id;
        vm.query = {
            '$top': vm.limit
        };

      
       

     

       







        function activate()
        {
          //  console.log("$routeParams", $routeParams);
            vm.productId = $routeParams.productId;
          //  console.log("vm.productId", vm.productId);
            if (vm.productId > 0) {
                GetProductById(vm.productId);
            }
           
            Search();
        }
        activate();

        function GetProductById()
        {
            mainService.GetProductById(vm.productId).then(function (res)
            { vm.product = res.data; console.log("vm.product", vm.product); })
        }

        function SaveProducts()
        {
            mainService.SaveProducts(vm.product).then(function (res)
            {
                vm.product = res.data;
                activate();
            })
           
        }
        //pagelimit change
        function limitChange(limit)
        {
            vm.query['$top'] = limit;
            Search();
        }
     
       

     
        function productidchange(id)
        {
            vm.query['$filter'] = id;
            Search();
        }
        
        function Search()
        {
            mainService.GetProducts().then(
                function (response) { vm.products = response.data; console.log("vm.product", vm.products); },
                function (error) { console.log(error);  })
            
            }


        
        }
        })();


