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

        vm.form = {};


        vm.pages = [];
        vm.Itemsperpage = 1;
        vm.totalbuyer;
        vm.totalBuyerPage;
        vm.currentPage = 1;
        vm.pagedPost = [];
      //  vm.pageChange = pageChange;
        vm.limit = 5;
        vm.query = {
            '$top' : vm.limit
        };
        vm.limitChange = limitChange;



 //buyerid
        vm.buyerid;
        vm.buyeridchange = buyeridchange;
        function buyeridchange(buyerid) {
            vm.query['$filter'] = 'BuyerId eq ' +buyerid;
            search();
        }

//buyercompany       
        vm.BuyerCompany = "";
        vm.buyernamechange = buyernamechange;
        function buyernamechange(BuyerCompany) {
            vm.query['$filter'] = "contains(BuyerCompany,'test')";
            //vm.query['$filter'] = "contains(BuyerCompany, + BuyerCompany)";
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




        //

        vm.filterbuyer = {};
        vm.filterdata = filterdata;
       

        //
        vm.BuyerId ;



        $rootScope.title = "Buyer List";

        activate();
        function activate() {
    
            mainService.GetProducts().then(function (res) { vm.product = res.data; console.log("GetProducts", vm.product); }),

           mainService.GetSources().then(function (res) { vm.Source = res.data; console.log("vm.Source", vm.Source); }),
            mainService.GetPriorities().then(function (res) { vm.Priority = res.data; console.log(" vm.Priority", vm.Priority); }),
             mainService.GetWebsites().then(function (res) {
               
                 vm.website = res.data;
                 console.log("vm.status", vm.website);
              
             }),
            search();
           
            //mainService.getBuyers().then(function (res) {
            //    vm.buyers = res.data;
            //    console.log("test", vm.buyers);
            //    vm.communicationdata = res.data.communicationChain;
            //    console.log("communicationChain", vm.communicationdata);
            //    vm.buyerdata = res.data.BuyerInfo;
            //    console.log("buyerdata", vm.buyerdata);
            //    vm.Designation = res.data.Designation;
            //    console.log("Designation", vm.Designation);
            //    vm.Priority = res.data.Priority;
            //    console.log("Priority", vm.Priority);
            //    vm.Source = res.data.Source;
            //    console.log("Source", vm.Source);
            //    vm.Status = res.data.Status;
            //    console.log("Status", vm.Status);
            //    vm.TransferredTo = res.data.TransferredTo;
            //    console.log("TransferredTo", vm.TransferredTo);
            //    vm.CommunicationMedium = res.data.CommunicationMedium;
            //    console.log("CommunicationMedium", vm.CommunicationMedium);
            //    vm.product = res.data.product;
            //    console.log("product", vm.product);
            //    vm.web = res.data.web;
            //    console.log("web", vm.web);

            //    vm.totalbuyer = vm.buyerdata.length;
            //    console.log("length.Buyer", vm.totalbuyer);
            //    vm.totalBuyerPage = Math.ceil(vm.totalbuyer / vm.Itemsperpage);
            //    console.log("TotalBuyerpage", vm.totalBuyerPage);

            //    for (var i = 1; i <= vm.totalBuyerPage; i++) {
            //        vm.pages.push(i);
            //    }


            //    vm.pageChange(vm.pages[--vm.currentPage]);

            //})
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

        function filterbuyerid()
        {



        }
        



        function search() {
            mainService.GetBuyers(vm.query).then(function (res) {
                vm.buyers = res.data;
                console.log("vm.buyers", vm.buyers);
            });
        }



        //function pageChange(page) 
        //{
        //    console.log('the page pased is', page);
        //    vm.pagedPost = [];
        //    vm.currentPage = page;
        //    index = (page - 1) * vm.Itemsperpage;
        //    console.log('the index is', index);
        //    var trackIndex = 0;
        //    for (var i = index; i <= vm.totalbuyer; i++) {
        //        vm.pagedPost.push(vm.buyerdata[i]);
        //        trackIndex++;
        //        if (trackIndex == vm.Itemsperpage) {
        //            break;
        //        }

        //    }

        //}



    }

})();