(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('communicationDetailsCtrl', communicationDetailsCtrl);

    communicationDetailsCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function communicationDetailsCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "communicationDetailsCtrl";
        //   alert("medium");
      
        vm.title = "communicationdetails";
        alert("communicationdetails");
        vm.communications = [];
        vm.communication = {};
        vm.communicationId;
       // vm.GetCommunications = GetCommunications;
        vm.GetCommunicationById = GetCommunicationById;
        //vm.SaveCommunications = SaveCommunications;

        ///  
        vm.TransferredTo = [];
        vm.status = [];
        vm.CommunicationMedium = [];
        vm.buyer = [];

       





        function activate() {
            vm.communicationId = $routeParams.communicationId;
            console.log(" vm.communicationId", vm.communicationId);
            if (vm.communicationId > 0)
            {
                vm.GetCommunicationById(vm.communicationId);
            }
            mainService.GetCommunications().then(function (res) {
                vm.communications = res.data;
                console.log("vm.communications", vm.communications);
                vm.TransferredTo = res.data.TransferredTo;
                console.log("followup", vm.TransferredTo);
                vm.status = res.data.Status;
                vm.CommunicationMedium = res.data.CommunicationMedium;
                console.log("vm.CommunicationMedium", vm.CommunicationMedium);
                vm.buyer = res.data.BuyerInfo;
                console.log("vm.buyer",vm.buyer);
            });
        }


        activate();




        function GetCommunicationById()
        {
            mainService.GetCommunicationById(vm.communicationId).then(function (res) {
                vm.communication = res.data;
                console.log("get communication by id", vm.communication);
            }, function () { });
        }


        function SaveMediums()
        {
            mainService.SaveMediums(vm.communication).then(function (res) {
                vm.communication = res.data;
              
                console.log("communication is", vm.communication);
                activate();
            }, function () { });
        }
    }
})();