(function () {
    'use strict';

    angular
        .module('app')
        .controller('addbuyer', addbuyer);

    addbuyer.$inject = ['$location']; 

    function addbuyer($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addbuyer';

        activate();

        function activate() { }
    }
})();
