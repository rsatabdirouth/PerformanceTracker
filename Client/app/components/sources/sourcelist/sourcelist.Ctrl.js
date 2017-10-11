(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('sourcelistCtrl', sourcelistCtrl);

    sourcelistCtrl.$inject = ['$rootScope','$location','mainService'];

    function sourcelistCtrl($rootScope,$location,mainService) {
        /* jshint validthis:true */
        $rootScope.title = "SourceList";
        var vm = this;
        alert("sourceList");
        
        vm.title = 'sourcelist';

        activate();

        function activate() { }
    }
})();
