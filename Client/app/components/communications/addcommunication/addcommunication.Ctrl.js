(function () {
    'use strict';

    angular
        .module('app')
        .controller('addcommunication', addcommunication);

    addcommunication.$inject = ['$location']; 

    function addcommunication($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addcommunication';

        activate();

        function activate() { }
    }
})();
