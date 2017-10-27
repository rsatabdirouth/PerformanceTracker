(function () {
    angular.module('PerformanceTrackerApp')
        .controller('buyerListCtrl', buyerListCtrl);
    buyerListCtrl.$inject = ['$rootScope', 'mainService'];
    function buyerListCtrl($rootScope, mainService) {
        var vm = this;
        vm.buyers = [];
        vm.buyerdata = [];
        vm.communicationdata = [];
        vm.Designation = [];
        vm.Priority = [];
        vm.Source = [];
        vm.Status = [];
        vm.TransferredTo = [];
        vm.CommunicationMedium = [];
        vm.product = [];
        vm.website = [];

       

        vm.pages = [];
        vm.Itemsperpage = 10;
        vm.totalbuyer;
        vm.totalBuyerPage;
        vm.currentPage = 1;
        vm.pagedPost = [];
        //
        vm.pageChange = pageChange;
        vm.limit = 5;
        vm.query = {
            '$top' : vm.limit
        };
        vm.limitChange = limitChange;



 //buyerid
        vm.buyerid;
        vm.buyeridchange = buyeridchange;
        function buyeridchange(buyerid) {
            vm.query['$filter'] = 'BuyerId eq ' + buyerid;
            search();
        }

//buyercompany       
        vm.BuyerCompany = "";
        vm.buyernamechange = buyernamechange;
        function buyernamechange(BuyerCompany) {
            console.log("BuyerCompany", BuyerCompany);
       

          //  vm.query['$filter'] = "indexof(BuyerCompany, 'test')  ne -1";
          
            vm.query['$filter'] = "indexof(BuyerCompany, '" + BuyerCompany + "') ne -1";
          
        
            search();
        }

//search by date
        vm.generatedDate = "";
        vm.dateChange = dateChange;
        function dateChange(generatedDate)
        {
            alert("datechange");
            console.log("generatedDate", generatedDate);
        //    vm.query['$filter'] = 'Date eq' + generatedDate;
            //   vm.query['$filter'] = "year(Date) eq" + 2016 + "&& month(Date) eq" + 10 + " && day(Date) eq" + 20;
           // vm.query[' $filter'] = 'year(Date) eq' + 2016;
          //  vm.query['$filter'] = "date(Date) eq" + generatedDate;
           // vm.query['$filter'] = 'Date gt DateTime' + '2017-10-24T09:13:28';
            vm.query['$filter'] = "Date gt DateTime'" + generatedDate +"'";
            search();
        }

//product
        vm.productid;
        vm.productidchange = productidchange;
        function productidchange(productid)
        {
            vm.query['$filter'] = 'ProductLookingFor eq ' + productid;
            search();

        }
//source
        vm.sourceid;
        vm.sourceidchange = sourceidchange;
        function sourceidchange(sourceid) {
            vm.query['$filter'] = 'BuyerSource eq ' + sourceid;
            search();

        }
//website
        vm.websiteid;
        vm.websiteidchange = websiteidchange;
        function websiteidchange(websiteid) {
            vm.query['$filter'] = 'BuyerWebsiteName eq ' + websiteid;
            search();

        }

        vm.filterdata = filterdata;
        vm.BuyerId;
        $rootScope.title = "Buyer List";

        activate();
        function activate() {
    
  mainService.GetProducts().then(function (res) { vm.product = res.data; console.log("GetProducts", vm.product); }),

  mainService.GetSources().then(function (res) { vm.Source = res.data; console.log("vm.Source", vm.Source); }),

  mainService.GetPriorities().then(function (res) { vm.Priority = res.data; console.log(" vm.Priority", vm.Priority); }),

  mainService.GetWebsites().then(function (res) {vm.website = res.data;
                 console.log("vm.status", vm.website);
              
             }),
            search();
           }

        function limitChange(limit) {
            vm.query['$top'] = limit;
            search();
        }
        vm.orderBy = orderBy;
        
        function orderBy(order, desc) {           
            desc = !desc;
            console.log(desc);
            if (desc) {
                order = order + " desc";
            }           
            vm.query['$orderby'] = order;           
            search();
        }

        function filterdata()
        {
          //  console.log("BuyerId", BuyerId);
         //   console.log('filter');
           vm.query['$filter'] = "BuyerId lt 5";
           // vm.query['$filter'] = contains(BuyerCompany, 'test');
            search();

        }

       


        function search() {
            mainService.GetBuyers(vm.query).then(function (res) {
                vm.buyers = res.data;
                console.log("vm.buyers", vm.buyers);
                vm.totalbuyer = vm.buyers.length;
                console.log("length.Buyer", vm.totalbuyer);
                vm.totalBuyerPage = Math.ceil(vm.totalbuyer / vm.Itemsperpage);
                console.log("TotalBuyerpage", vm.totalBuyerPage);

               for (var i = 1; i <= vm.totalBuyerPage; i++) {
                       vm.pages.push(i);
                    }


                    vm.pageChange(vm.pages[--vm.currentPage]);

                })
            }
        



        function pageChange(page) 
        {
            console.log('the page pased is', page);
            vm.pagedPost = [];
            vm.currentPage = page;
            index = (page - 1) * vm.Itemsperpage;
            console.log('the index is', index);
            var trackIndex = 0;
            for (var i = index; i <= vm.totalbuyer; i++) {
                vm.pagedPost.push(vm.buyerdata[i]);
                trackIndex++;
                if (trackIndex == vm.Itemsperpage) {
                    break;
                }

            }

        }

        vm.reset = reset;
        function reset(pa)
        {
            console.log("pa",pa);
            vm.BuyerId = "";
            vm.websiteid = "";
            vm.productid = "";
            vm.sourceid = "";
            vm.generatedDate = "";
            vm.BuyerCompany = "";
            search();

        }


    }

})();