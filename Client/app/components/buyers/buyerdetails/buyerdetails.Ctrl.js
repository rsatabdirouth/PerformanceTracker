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
       // alert("add Buyer");
      
        




        vm.buyerId;
        vm.buyer = {};
        vm.GetBuyerById = GetBuyerById;
         //
        // vm.validLongForm = validLongForm;
        //
        vm.SaveBuyers = SaveBuyers;
       

        vm.products = [];
        vm.designation = [];
        vm.Priority = [];
        vm.sources = [];
        vm.TransferredTo = [];

        vm.status = [];
        vm.website = [];
        vm.mail = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        vm.formSubmitted = false;
   
        activate();


        function activate() {

            vm.buyerId = $routeParams.buyerId;
            console.log("$routeParams", $routeParams);
            if (vm.buyerId > 0)
            {
                vm.GetBuyerById(vm.buyerId);
                
           }
     
            mainService.GetWebsites().then(function (res) {
               
                vm.website = res.data;
                console.log("vm.status", vm.website);
              
            }),
              mainService.GetProducts().then(function (res) { 
                  vm.products = res.data; console.log("GetProducts", vm.products); }),

           mainService.GetSources().then(function (res) { 
               vm.sources = res.data; console.log("vm.sources", vm.sources); }),
            mainService.GetDesignations().then(function (res) {
                vm.designation = res.data; console.log("vm.designation", vm.designation); }),
             mainService.GetPriorities().then(function (res) { 
                 vm.Priority = res.data; console.log(" vm.Priority", vm.Priority); })
          
     
         
         




            
        }


  
        function GetBuyerById() {
            mainService.GetBuyerById(vm.buyerId).then(function (res) {
                vm.buyer = res.data;
                console.log("GetBuyerById", vm.buyer);
            }, function () { });
        }

//
  //function validLongForm() {
  //if (vm.buyer.BuyerCompany != "" && vm.buyer.ContactPerson != "" && vm.buyer.ProductLookingFor != null && vm.buyer.ContactPersonDesignation != null && vm.buyer.ContactNumber != null && vm.buyer.AlternativeNumber != null && vm.buyer.Email != "" && vm.buyer.Extension != "" && vm.buyer.SourceWebLink != null && vm.buyer.BuyerSource != null && vm.buyer.BuyerPriority != null && vm.buyer.IsBuyerInterested != null && vm.buyer.BuyerWebsiteName != null)
  //              return true;
  //          else
  //              false;
  //      }
//   

  function SaveBuyers(buyer)
  {
      console.log("testvalidation", vm.buyer);
      //if (!buyeradd.$pristine && buyeradd.$valid && validLongForm()) {
          vm.formSubmitted = true;
          mainService.SaveBuyers(vm.buyer).then(
              function (res) {
                  vm.buyer = res.data;
                  console.log(vm.buyer);
              },
              function (err) {
                  console.log(err);
              }

              );
      }
  }

   // }
})();
