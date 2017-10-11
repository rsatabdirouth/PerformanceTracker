(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('sourcedetails', sourcedetails);

    sourcedetails.$inject = ['$location']; 

    function sourcedetails($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'sourcedetails';

        activate();

        function activate() { }
    }
})();
