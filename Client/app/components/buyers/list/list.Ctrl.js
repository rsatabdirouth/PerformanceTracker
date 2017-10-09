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
        vm.web = [];


        vm.pages = [];
        vm.Itemsperpage = 1;
        vm.totalbuyer;
        vm.totalBuyerPage;
        vm.currentPage = 1;
        vm.pagedPost = [];
        vm.pageChange = pageChange;


        $rootScope.title = "Buyer List";

        activate();
        function activate() {



            mainService.getBuyers().then(function (res) {
                vm.buyers = res.data;
                console.log("test", vm.buyers);
                vm.communicationdata = res.data.communicationChain;
                console.log("communicationChain", vm.communicationdata);
                vm.buyerdata = res.data.BuyerInfo;
                console.log("buyerdata", vm.buyerdata);
                vm.Designation = res.data.Designation;
                console.log("Designation", vm.Designation);
                vm.Priority = res.data.Priority;
                console.log("Priority", vm.Priority);
                vm.Source = res.data.Source;
                console.log("Source", vm.Source);
                vm.Status = res.data.Status;
                console.log("Status", vm.Status);
                vm.TransferredTo = res.data.TransferredTo;
                console.log("TransferredTo", vm.TransferredTo);
                vm.CommunicationMedium = res.data.CommunicationMedium;
                console.log("CommunicationMedium", vm.CommunicationMedium);
                vm.product = res.data.product;
                console.log("product", vm.product);
                vm.web = res.data.web;
                console.log("web", vm.web);

                vm.totalbuyer = vm.buyerdata.length;
                console.log("length.Buyer", vm.totalbuyer);
                vm.totalBuyerPage = Math.ceil(vm.totalbuyer / vm.Itemsperpage);
                console.log("TotalBuyerpage", vm.totalBuyerPage);

                for (var i = 1; i <= vm.totalBuyerPage; i++) {
                    vm.pages.push(i);
                }

                vm.pageChange(vm.pages[--vm.currentPage]);

            })
        }
       
        function pageChange(page) {
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
       


    }

})();