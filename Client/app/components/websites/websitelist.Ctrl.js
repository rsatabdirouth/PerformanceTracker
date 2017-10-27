
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
        //pagination sorting using odata
        vm.limit = 2;
        vm.query = {
            '$top': vm.limit
        };
        vm.limitChange = limitChange;
        //limitchange
        function limitChange(limit)
        {
            vm.query['$top'] = limit;
            Search();
        }
      
       //WebsiteName       
        vm.WebsiteName = "";
        vm.websitechange = websitechange;
        function websitechange(WebsiteName) {
            console.log("WebsiteName", WebsiteName);
            vm.query['$filter'] = "indexof(WebsiteName, '" + WebsiteName + "') ne -1";
            Search();
        }
        //reset
        vm.reset = reset;
        function reset() { return vm.WebsiteName = "" }


      

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
            mainService.GetWebsites(vm.query).then(
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
