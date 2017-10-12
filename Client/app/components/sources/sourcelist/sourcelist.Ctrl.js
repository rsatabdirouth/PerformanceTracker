(function () {
    'use strict';


    angular
        .module('PerformanceTrackerApp')
        .controller('sourcelistCtrl', sourcelistCtrl);

    sourcelistCtrl.$inject = ['$rootScope', '$location', 'mainService', '$routeParams']

    function sourcelistCtrl($rootScope, $location, mainService, $routeParams) {
        /* jshint validthis:true */
        $rootScope.title = "Product Details";
        var vm = this;
        vm.title = 'SourceDetails';
       // alert("Sourcedetails");
        vm.sources = [];
        vm.source = {};
        vm.sourceId;
        vm.GetSourceById = GetSourceById;
        vm.SaveSources = SaveSources;



        active();

        function active() {
      
            vm.sourceId = $routeParams.sourceId;
            if (vm.sourceId > 0) {
                GetSourceById(vm.sourceId);
            }
            mainService.GetSources().then(function (res) { vm.sources = res.data.Source; console.log("vm.sources", vm.sources); })

        }

        function GetSourceById() {
            mainService.GetSourceById(vm.sourceId).then(function (res) {
                vm.source = res.data;
                console.log("GetSourceById", vm.source);
            }, function () { });
        }


        function SaveSources() {
            mainService.SaveSources(vm.source).then(function (res) {
                vm.source = res.data;
                console.log(res);
                console.log("Saved data is ", vm.source);
            }, function () { });
        }

    }

    

    
       
    })();
