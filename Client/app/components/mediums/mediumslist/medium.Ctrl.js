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

        activate();

        function activate() {
            vm.mediumId = $routeParams.mediumId;
         //   console.log("$routeParams.mediumId", $routeParams.mediumId);
            if(vm.mediumId>0)
            {
               vm.GetMediumsById(vm.mediumId);
            }
            mainService.GetMediums().then(function (res) { vm.mediums = res.data; console.log("vm.medium", vm.mediums) });
        }

      



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
