(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('mediumCtrl', mediumCtrl);

    mediumCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function mediumCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "medium";
     //   alert("medium");
        vm.title = 'medium';

        vm.mediums = [];
        vm.medium = {};
        vm.mediumId;
        vm.GetMediumsById = GetMediumsById;
        vm.SaveMediums = SaveMediums;

        //pagination
        vm.limit = 2;
        vm.query = { '$top': vm.limit };
        vm.limitChange = limitChange;
       //limitchange
        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();
        }


        //orderby
        vm.orderBy = orderBy;

        function orderBy(order, desc) {
            desc = !desc;
            console.log(desc);
            if (desc) {
                order = order + " desc";
            }
            vm.query['$orderby'] = order;
            search();
        }
        //reset
        vm.reset = reset;
        function reset() { vm.mediumname = ""; search(); }

        //search
        vm.mediumname = "";
        vm.mediumchange = mediumchange;
        function mediumchange(mediumname)
        {
            vm.query['$filter'] = "indexof(Medium ,'" + mediumname + "') ne -1";
            // vm.query['$filter'] = "indexof(ProductName, '" + ProductName + "') ne -1";
            search();
        }
       
        
        activate();

        function activate() {
            vm.mediumId = $routeParams.mediumId;
         //   console.log("$routeParams.mediumId", $routeParams.mediumId);
            if(vm.mediumId>0)
            {
               vm.GetMediumsById(vm.mediumId);
            }
            search();
        }

        //search
        function search()
        { mainService.GetMediums(vm.query).then(function (res) { vm.mediums = res.data; console.log("vm.medium", vm.mediums) }); }


        function GetMediumsById() {
            mainService.GetMediumsById(vm.mediumId).then(function (res) {
                vm.medium = res.data;
                console.log("get medium by id", vm.medium);
            }, function () { });
        }


        function SaveMediums() {
            mainService.SaveMediums(vm.medium).then(function (res) {
                vm.medium = res.data;
                console.log(res);
                console.log("Savemediums is", vm.medium);
                activate();
            }, function () { });
        }
    }
})();
