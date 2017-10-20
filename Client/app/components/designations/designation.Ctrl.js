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



        function activate() {
            vm.DesignationId = $routeParams.DesignationId;
            console.log(vm.DesignationId);
            if (vm.DesignationId)
            {
                vm.GetDesignationById(vm.DesignationId);
            }
           
            mainService.GetDesignations().then(function (res) {
                vm.designations = res.data;
                console.log(" vm.Designations", vm.designations);
            })
        }
        activate();

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
