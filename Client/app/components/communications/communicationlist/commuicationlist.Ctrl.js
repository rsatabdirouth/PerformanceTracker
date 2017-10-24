(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('communicationlistCtrl', communicationlistCtrl);

    communicationlistCtrl.$inject = ['$rootScope', '$location', 'mainService'];

    function communicationlistCtrl($rootScope, $location, mainService) {
        /* jshint validthis:true */
        $rootScope.title = "Communication List";
        var vm = this;
        vm.title = 'communicationlist';
        vm.Communicationlist = [];
        vm.pages = [];
        vm.pagedPost = [];
        vm.totalItems;
        vm.totalpages;
        vm.currentpage = 1;
        vm.countPerPage = 5;
        vm.status = [];
        vm.level = [];
        vm.medium = [];
        vm.buyer = [];
        vm.form = {};

      

        //pagination and sorting using odata
        vm.communications = [];
        vm.limit = 5;
        vm.limitChange = limitChange;

        vm.query = {
            '$top': vm.limit
        };
        vm.orderBy = orderBy;
      


  

        activate();
        function activate()
        {

     mainService.GetStatuses().then(function (res) { vm.status = res.data; console.log("status", vm.status); }),
     mainService.GetLevels().then(function (res) { vm.level = res.data;console.log("level",vm.level)})
     mainService.GetMediums().then(function (res) { vm.medium = res.data; console.log("medium", vm.medium); })
     mainService.GetBuyers().then(function (res) { vm.buyer = res.data; console.log("vm.buyer", vm.buyer); })
            search();

         }

        //function for pagination and sorting
        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();
        }
       
    

        function orderBy(order, desc) {
            desc = !desc;
            console.log(desc);
            if (desc) {
                order = order + " desc";
            }
            vm.query['$orderby'] = order;
            search();
        }
        //followup
        vm.followupid;
        vm.followupidchange = followupidchange;
        function followupidchange(followupid) {
            vm.query['$filter'] = 'TransferredTo eq ' + followupid;
            search();

        }
        //buyerid
        vm.BuyerID;
        vm.buyeridchange = buyeridchange;
        function buyeridchange(BuyerID) {
            vm.query['$filter'] = 'BuyerID eq ' + BuyerID;
            search();

        }
        //communicationid
        vm.CommunicationID;
        vm.communicationidchange = communicationidchange;
        function communicationidchange(CommunicationID) {
            vm.query['$filter'] = 'CommunicationID eq ' + CommunicationID;
            search();

        }
        //medium
        vm.mediumid;
        vm.mediumidchange = mediumidchange;
        function mediumidchange(mediumid) {
            vm.query['$filter'] = 'CommunicationVia eq ' + mediumid;
            search();

        }
      
        //interested
        vm.InterestedID;
        vm.InterestedIdchange = InterestedIdchange;
        function InterestedIdchange(InterestedID) {
            vm.query['$filter'] = 'Isintersted eq ' + InterestedID;
            search();

        }
        //NextFollowupdate

        vm.NextFollowupdate;
        vm.followupdatechange = followupdatechange;
        function followupdatechange(NextFollowupdate) {
            vm.query['$filter'] = 'NextFollowUpDate eq ' + NextFollowupdate;
            search();

        }











        function search() {
            mainService.GetCommunications(vm.query).then(function (res) {
                vm.communications = res.data;
                console.log("vm.communications", vm.communications);
            });
        }
   
    }
})();

