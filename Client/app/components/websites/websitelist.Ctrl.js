﻿
(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('websitelistCtrl', websitelistCtrl);

    websitelistCtrl.$inject = ['$rootScope','$routeParams', '$location', 'mainService'];

    function websitelistCtrl($rootScope,$routeParams, $location, mainService) {
        /* jshint validthis:true */
        var vm = this;
        $rootScope.title = "websitelistCtrl";
        vm.title = 'websitelistCtrl';
     

        vm.websites = [];
        vm.website = {};
        vm.websiteId;
        vm.Search = Search;
        vm.SaveWebsites = SaveWebsites;
        vm.GetWebsiteById = GetWebsiteById;

        vm.limit = 3;
        vm.limitChange = limitChange;
        vm.query = { '$top': vm.limit };
       
        function limitChange(limit)
        {
            
            vm.query['$top'] = limit;
            Search();
        }
        

      

        function activate() {
            vm.websiteId = $routeParams.websiteId
            if (vm.websiteId > 0)
            {
                vm.GetWebsiteById(vm.websiteId);
            }

            Search();

        }
        activate();

        function Search()
        {
            mainService.GetWebsites().then(
               function (response) { vm.websites = response.data; console.log(vm.websites); },
               function (error) { console.log(error); });
        }

        function GetWebsiteById(){
            mainService.GetWebsiteById(vm.websiteId).then(function(res){vm.website=res.data;
                console.log("the data with a single id is",vm.website);})
        }
        function SaveWebsites()
        {
            mainService.SaveWebsites(vm.website).then(function (res) {
                vm.website = res.data;
                console.log("vm.website", vm.website);
                activate();
            });
           
        }
    }
})();
