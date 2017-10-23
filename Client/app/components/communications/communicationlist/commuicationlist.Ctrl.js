(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('commuicationlistCtrl', commuicationlistCtrl);

    commuicationlistCtrl.$inject = ['$rootScope', '$routeParams', 'mainService', '$location'];

    function commuicationlistCtrl($rootScope, $routeParams, mainService, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'commuicationlist';
        alert("commuicationlistCtrl");
        vm.commuications = [];
       
        vm.limit = 10;
        vm.query = {
            '$top': vm.limit
        };
        vm.limitChange = limitChange;

        activate();
        function activate() { search(); }
        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();
        }
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
        function search() {
            mainService.GetCommunications().then(function (res) {
                vm.commuications = res.data.communicationChain;
                console.log("vm.GetCommunications", vm.GetCommunications);
            });
        }
    }
})();
