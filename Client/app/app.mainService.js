(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .service('mainService', mainService);

    mainService.$inject = ['$http'];

    function mainService($http) {
        var service = this;
        service.getBuyers = getBuyers;
        function getBuyers() {
            return $http({
            method: 'GET',
            url: 'http://localhost:8057/api/Buyers/GetBuyers'
            });
        }

    }
})();

