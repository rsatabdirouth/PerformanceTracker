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
        // alert("levelCtrl");
        vm.title = 'levelCtrl';

        vm.levels = [];
        vm.level = {};
        vm.levelId;
        vm.GetLevelById = GetLevelById;
        vm.SaveLevels = SaveLevels;
   
        vm.FollowupByform;
        vm.reset = reset;
        //pagination
        vm.limit = 2;
        vm.query = { '$top': vm.limit };
        vm.limitChange = limitChange;
        //limitchange
        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();
        }
        //levelsearch       
        vm.levelname = "";
        vm.levelnamechange = levelnamechange;
        function levelnamechange(levelname) {
            console.log("FollowupBy", levelname);
            vm.query['$filter'] = "indexof(FollowupBy, '" + levelname + "') ne -1";
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
        function reset() { vm.levelname = ""; search(); }







        activate();

        function activate() {
            vm.levelId = $routeParams.levelId;
            if (vm.levelId > 0) {
                vm.GetLevelById(vm.levelId);
            }
            search();
        }
        //search
        function search()
        {
            mainService.GetLevels(vm.query).then(function (res) {
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
                activate();
            }, function () { });
        }

        function reset()
        {
           
            vm.level = {};
          
            

        }

      
    }
})();

