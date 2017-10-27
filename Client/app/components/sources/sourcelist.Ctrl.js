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

        //odata
        vm.limit = 3;
        vm.limitChange = limitChange;
        vm.query = {
            '$top': vm.limit
        };
        //limit
        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();

        }
        //reset
        vm.reset = reset;
        function reset() { return vm.sourceName = ""; }
        //search
        vm.sourceName = "";
        vm.sourcenameChange = sourcenameChange;
        function sourcenameChange(sourceName) {
            console.log("sourceName", sourceName);
            vm.query['$filter'] = "indexof(Source, '" + sourceName + "') ne -1";
            search();
        }
        //order
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


        active();

        function active() {
      
            vm.sourceId = $routeParams.sourceId;
            if (vm.sourceId > 0) {
              vm.GetSourceById(vm.sourceId);
            }
            search();

        }
        //search
        function search()
        { mainService.GetSources(vm.query).then(function (res) { vm.sources = res.data; console.log("vm.sources", vm.sources); }) }

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
                active();
            }, function () { });
        }

        

    }

    

    
       
    })();
