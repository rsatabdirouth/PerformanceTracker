(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('StatusCtrl', StatusCtrl);

    StatusCtrl.$inject = ['$rootScope','$routeParams','mainService','$location'];

    function StatusCtrl($rootScope,$routeParams,mainService,$location) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "Communication Status";

        vm.title = 'Status';
       // alert("status");
        vm.statuses = [];
        vm.status = {};
        vm.statusId;
        vm.GetStatusById = GetStatusById;
        vm.SaveStatuses = SaveStatuses;
        vm.columnname;

        //pagination
        vm.limit = 3;
        vm.limitChange = limitChange;
        vm.query = {
            '$top': vm.limit
        };
        function limitChange(limit)
        {
           vm.query['$top'] = limit;
            search();

        }
        //reset
        vm.reset = reset;
        function reset() { return vm.statusname = "";}
        //search
        vm.statusname = "";
        vm.statusChange = statusChange;
        function statusChange(statusname) {
            console.log("statusname", statusname);
            vm.query['$filter'] = "indexof(Status, '" + statusname + "') ne -1";
            search();
        }

    

        function activate()
        {
            vm.columnname = $routeParams.columnname;
            console.log("column name is",vm.columnname);
            vm.statusId = $routeParams.statusId;
            console.log("vm.statusId", vm.statusId);
            if (vm.statusId > 0)
            {
                vm.GetStatusById(vm.statusId);
            }
            
            search();
        }
        activate();

        function search()
        {
            mainService.GetStatuses(vm.query).then(function (res) {
                vm.statuses = res.data;
                console.log(" vm.statuses", vm.statuses);
            })
        }

        function GetStatusById() {
            mainService.GetStatusById(vm.statusId).then(function(res){
                vm.status = res.data;
                console.log(" vm.status", vm.status);
            
            });

        }
    
        function SaveStatuses()
        {
            mainService.SaveStatuses(vm.status).then(function(res){
                vm.status = res.data;
                console.log("the saved data is", vm.status);
                activate();
            })
            
        }


        
    }
})();





