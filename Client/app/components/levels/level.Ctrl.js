(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('levelCtrl', levelCtrl);

    levelCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function levelCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "levelCtrl";
        alert("levelCtrl");
        vm.title = 'levelCtrl';

        vm.levels = [];
        vm.level = {};
        vm.levelId;
        vm.GetLevelById = GetLevelById;
        vm.SaveLevels = SaveLevels;

        activate();

        function activate() {
            vm.levelId = $routeParams.levelId;
            if (vm.levelId > 0) {
                GetLevelById(vm.levelId);
            }
            mainService.GetLevels().then(function (res) {
                vm.levels = res.data;
                console.log("vm.levels", vm.levels);
            });
        }


        function GetLevelById() {
            mainService.GetLevelById(vm.levelId).then(function (res) {
                vm.level = res.data;
                console.log("get level by id", vm.levelId);
            }, function () { });
        }


        function SaveLevels() {
            mainService.SaveLevels(vm.level).then(function (res) {
                vm.level = res.data;
                console.log(res);
                console.log("Savemediums is", vm.level);
            }, function () { });
        }
    }
})();

