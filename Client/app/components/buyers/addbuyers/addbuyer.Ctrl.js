(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('addbuyer', addbuyer);

    addbuyer.$inject = ['$rootScope','$location']; 
  //  alert("add Buyer");
    function addbuyer($rootScope,$location) {
        /* jshint validthis:true */
        $rootScope.title = "Add New Buyer";
        var vm = this;
        vm.title = 'addbuyer';

        activate();

        function activate() { }
    }
})();
