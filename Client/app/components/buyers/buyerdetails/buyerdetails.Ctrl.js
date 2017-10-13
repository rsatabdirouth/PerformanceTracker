(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('buyerdetailsCtrl', buyerdetailsCtrl);

    buyerdetailsCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];
  // 
    function buyerdetailsCtrl($rootScope,$routeParams,mainService, $location) {
        /* jshint validthis:true */
        $rootScope.title = "buyer details";
        var vm = this;
        vm.title = 'buyer details';
        alert("add Buyer");
      

        vm.buyerId;
        vm.buyer = {};
        vm.GetBuyerById = GetBuyerById;
       // vm.GetBuyerById = GetBuyerById;
        vm.SaveBuyers = SaveBuyers;
       

        vm.products = [];
        vm.designation = [];
        vm.priorities = [];
        vm.sources = [];
        vm.TransferredTo = [];
        vm.status = [];
        vm.website = [];

   
        activate();


        function activate() {

            vm.buyerId = $routeParams.buyerId;
            console.log("$routeParams", $routeParams);
            if (vm.buyerId > 0)
            {
                vm.GetBuyerById(vm.buyerId);
                
           }
     
            mainService.getBuyers().then(function (res) {
                vm.products = res.data.product;
                vm.priorities = res.data.Priority;
                vm.sources = res.data.Source;
                vm.designation = res.data.Designation;
                vm.TransferredTo = res.data.TransferredTo;
                vm.status = res.data.Status;
                vm.website = res.data.web;
            })
        }

  
        function GetBuyerById() {
            mainService.GetBuyerById(vm.buyerId).then(function (res) {
                vm.buyer = res.data;
                console.log("GetSourceById", vm.source);
            }, function () { });
        }



     

        function SaveBuyers() {
            mainService.SaveBuyers(vm.buyer).then(
                function (res) 
                { 
                    vm.buyer = res.data;
                    console.log(vm.buyer);
                },
                function (err)
                { console.log(err);}
                
                );  }

    }
})();
