(function () {
    'use strict';

    angular
        .module('app')
        .controller('app', app);

    app.$inject = ['$location']; 

    function app($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'app';

        activate();

        function activate() { }
    }
})();
