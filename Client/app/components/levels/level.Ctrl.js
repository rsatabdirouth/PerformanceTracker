(function () {
    'use strict';

    angular
        .module('app')
        .controller('level', level);

    level.$inject = ['$location']; 

    function level($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'level';

        activate();

        function activate() { }
    }
})();
