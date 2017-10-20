(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('followupCtrl', followupCtrl);

    followupCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];
    // 
    function followupCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        $rootScope.title = "followupCtrl";
        var vm = this;
        vm.title = 'followupCtrl';
      //  alert("followupCtrl");


        vm.followupId;
        vm.communications = [];
        vm.communication = {};
      //  vm.GetCommunications = GetCommunications;

        vm.GetCommunicationById = GetCommunicationById;
        vm.SaveCommunications = SaveCommunications;


  
        vm.TransferredTo = [];
        vm.status = [];
        vm.buyer = [];
        vm.CommunicationMedium = [];



        activate();


        function activate() {

            vm.followupId = $routeParams.followupId;
            console.log("vm.followupId", vm.followupId);
            if (vm.followupId > 0)
            {
                vm.GetCommunicationById(vm.followupId);

            }

            mainService.GetCommunications().then(function (res) {
                vm.communications = res.data;
                console.log("vm.communications", vm.communications);

                vm.status = res.data.Status;
                console.log("vm.Status", vm.status);


                vm.TransferredTo = res.data.TransferredTo;
                console.log("followup", vm.TransferredTo);

                vm.CommunicationMedium = res.data.CommunicationMedium;
                console.log("vm.CommunicationMedium", vm.CommunicationMedium);

                vm.buyer = res.data.BuyerInfo;
                console.log("vm.buyer", vm.buyer);






            });
        }


        function GetCommunicationById() {
            mainService.GetCommunicationById(vm.followupId).then(function (res) {
                vm.communication = res.data;
                console.log("GetCommunicationById", vm.communication);
            }, function () { });
        }

        function SaveCommunications() {
            mainService.SaveCommunications(vm.communication).then(
                function (res) {
                    vm.communication = res.data;
                    console.log("vm.communication", vm.communication);
                },
                function (err)
                { console.log(err); }

                );
        }

    }
})();
