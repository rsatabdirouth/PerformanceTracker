(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .service('mainService', mainService);

    mainService.$inject = ['$http'];

    function mainService($http) {
        var service = this;
       

        service.getMedium = getMedium;

        //Operation on buyers
        service.getBuyers = getBuyers;
        service.GetBuyerById = GetBuyerById;
        service.SaveBuyers = SaveBuyers;

        //Operation on communications
        service.GetCommunications = GetCommunications;
        service.GetCommunicationById = GetCommunicationById;
        service.SaveCommunications = SaveCommunications;

        //Operation on levels
        service.GetLevels = GetLevels;
        service.GetLevelById = GetLevelById;
        service.SaveLevels = SaveLevels;

        //Operation on Mediums
        service.GetMediums = GetMediums;
        service.GetMediumsById = GetMediumsById;
        service.SaveMediums = SaveMediums;


        //Operation on products
        service.GetProducts = GetProducts;
        service.GetProductById = GetProductById;
        service.SaveProducts = SaveProducts;

        

        //Opertation on source
        service.GetSource = GetSource;
        service.GetSourceById = GetSourceById;
        service.SaveSources = saveSources;

        //Operation on websites
        service.GetWebsites = GetWebsites;
        service.GetWebsiteById = GetWebsiteById;
        service.SaveWebsites = SaveWebsites;



     


       //buyer function

        function getBuyers() {
            return $http({
            method: 'GET',
            url: 'http://localhost:8057/api/Buyers/GetBuyers'
            });
        }
        function GetBuyerById() { }
        function SaveBuyers(){}

        //communication function
        function GetCommunications() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetCommunicationById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: { id: id }

            });
        }
        function SaveCommunications(source) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data: source

            });
        }

        //level function
        function GetLevels() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetLevelById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: { id: id }

            });
        }
        function SaveLevels(source) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data: source

            });
        }

        //medium function
        function GetMediums() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetMediumsById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: { id: id }

            });
        }
        function SaveMediums(source) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data: source

            });
        }

        
       //productfunction
        function GetProducts() {
            return $http(
                {
                    method: 'GET',
                    url: 'http://localhost:8057/api/Products/GetProducts',
                }

                );
        }
        function GetProductById(id) {
      return $http({ method: 'GET', url: 'http://localhost:8057/api/Products/GetProductsById', params: { id: id } });
  }
        function SaveProducts(product)
        {
            return $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Products/SaveProducts',
                data: product
            });
        }
      //source function
        function GetSource() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetSourceById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: {id:id}
                    
            });
        }
        function SaveSources(source) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data:source

            });
        }
      //website function
        function GetWebsites() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetWebsiteById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: { id: id }

            });
        }
        function SaveWebsites(source) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data: source

            });
        }
 
       


    }
})();

