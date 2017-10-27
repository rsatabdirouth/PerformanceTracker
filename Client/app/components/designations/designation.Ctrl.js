(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('designationCtrl', designationCtrl);

    designationCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function designationCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "designation Status";

        vm.title = 'designation';
      //  alert("designation");
        vm.designations = [];
        vm.designation = {};
        vm.DesignationId;
        vm.GetDesignationById = GetDesignationById;
        vm.SaveDesignations = SaveDesignations;

        //paginations
        vm.limit = 2;
        vm.limitChange = limitChange;
        vm.query = { '$top': vm.limit };
        //limitchange
        function limitChange(limit)
        {
            console.log("limit",limit);
            vm.query['$top'] = limit;
            search();

        }
        //search
        vm.designationName = "";
        vm.designationchange = designationchange;
        function designationchange(designationName)
        {
            console.log("designation", designationName);
           // vm.query['$filter'] = "indexof(designation,'" + designation + "') ne -1";
            vm.query['$filter'] = "indexof(designation, '" + designationName + "') ne -1";
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
        function reset()
        {
            vm.designationName = "";
        }




        function activate() {
            vm.DesignationId = $routeParams.DesignationId;
            console.log(vm.DesignationId);
            if (vm.DesignationId)
            {
                vm.GetDesignationById(vm.DesignationId);
            }
           
            search();
        }
        activate();
        function search()
        {
            mainService.GetDesignations(vm.query).then(function (res) {
                vm.designations = res.data;
                console.log(" vm.Designations", vm.designations);
            })
        }

        function GetDesignationById() {
            mainService.GetDesignationById(vm.DesignationId).then(function (res) {
                vm.designation = res.data;
                console.log(" vm.Designation", vm.designation);

            });

        }

        function SaveDesignations() {
            mainService.SaveDesignations(vm.designation).then(function (res) {
                vm.designation = res.data;
                console.log("the saved data is", vm.designation);
                activate();
            })

        }



    }
})();
