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
        alert("status");
        vm.statuses = [];
        vm.status = {};
        vm.statusId;
        vm.GetStatusById = GetStatusById;
        vm.SaveStatuses = SaveStatuses;

    

        function activate()
        {
            vm.statusId = $routeParams.statusId;
            console.log(vm.statusId);
            vm.GetStatusById(vm.statusId);
            mainService.GetStatuses().then(function (res)
            {
                vm.statuses = res.data;
                console.log(" vm.statuses", vm.statuses);
            })
        }
        activate();

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





