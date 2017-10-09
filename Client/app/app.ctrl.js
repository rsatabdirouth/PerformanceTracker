(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$rootScope'];

    function mainCtrl($rootScope) {
        $rootScope.title = "Performance Tracker";
        console.log("test1");
        /* jshint validthis:true */
        var vm = this;

        vm.page = "Main page";
       // alert("test");
        activate();

        function activate() { }
    }
})();



