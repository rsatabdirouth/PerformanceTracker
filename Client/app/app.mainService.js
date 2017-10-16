(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .service('mainService', mainService);

    mainService.$inject = ['$http'];

    function mainService($http) {
        var service = this;
       

       

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
        service.GetSources = GetSources;
        service.GetSourceById = GetSourceById;
        service.SaveSources = SaveSources;

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
        function GetBuyerById(id) {
         return  $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Buyers/GetBuyerById',
                params: {id : id}
                });
        }
        function SaveBuyers(buyer) {
        return  $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Buyers/SaveBuyers',
                data:buyer
            });
        }

        //communication function
        function GetCommunications() {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Communications/GetCommunications'
            });
        }
        function GetCommunicationById(id) {
            $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Communications/GetCommunicationById',
                params: { id: id }

            });
        }
        function SaveCommunications(communication) {
            $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Communications/SaveCommunications',
                data: communication

            });
        }

        //level function
        function GetLevels() {
         return   $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Levels/GetLevels'
            });
        }
        function GetLevelById(id) {
         return   $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Levels/GetLevelById',
                params: { id: id }

            });
        }
        function SaveLevels(level) {
         return   $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Levels/SaveLevels',
                data: level

            });
        }

       // medium function
        function GetMediums() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Mediums/GetMediums'
            });
        }
        function GetMediumsById(id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Mediums/GetMediumsById',
                params: { id: id }

            });
        }
        function SaveMediums(medium) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Mediums/SaveMediums',
                data: medium

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
        function GetSources() {
         return   $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSources'
            });
        }
        function GetSourceById(id) {
         return   $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Sources/GetSourcesById',
                params: {id:id}
                    
            });
        }
        function SaveSources(source) {
          return  $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Sources/SaveSources',
                data:source

            });
        }

        //website function
        function GetWebsites() {
         return   $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Websites/GetWebsites'
            });


        }
        function GetWebsiteById(id) {
          return  $http({
                method: 'GET',
                url: 'http://localhost:8057/api/Websites/GetWebsiteById',
                params: { id: id }

            });
        }
        function SaveWebsites(website) {
       return     $http({
                method: 'POST',
                url: 'http://localhost:8057/api/Websites/SaveWebsites',
                data: website

            });
        }
 
       


    }
})();

