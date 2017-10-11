(function () {
    'use strict';

    angular
        .module('PerformanceTrackerApp')
        .controller('communicationlist', communicationlist);

    communicationlist.$inject = ['$rootScope', '$location', 'mainService'];

    function communicationlist($rootScope, $location, mainService) {
        /* jshint validthis:true */
        $rootScope.title = "Communication List";
        var vm = this;
        vm.title = 'communicationlist';
        vm.TransferredTo = [];
        vm.Communicationmedium = [];
       // alert("communication");
        activate();
        vm.Communicationlist = [];
        vm.pages = [];
        vm.pagedPost = [];
        vm.totalItems;
        vm.totalpages;
        vm.currentpage = 1;
        vm.countPerPage = 1;
        vm.pageChange = pageChange;





        function activate() {
            mainService.getBuyers()
                .then
                (
                function (res) {

                    vm.TransferredTo = res.data.TransferredTo;
                    console.log("TransferredTo", vm.TransferredTo);

                    vm.Communicationlist = res.data.communicationChain;
                    console.log("vm.Communicationlist", vm.Communicationlist);
                    vm.totalItems = vm.Communicationlist.length;
                    console.log("length", vm.totalItems);
                    vm.totalpages = Math.ceil(vm.totalItems /  vm.countPerPage );
                    console.log(" vm.totalpages", vm.totalpages);
                    vm.Communicationmedium = res.data.CommunicationMedium;
                    console.log("jkhkjhkj",vm.Communicationmedium);

                    for (var i = 1; i <= vm.totalpages; i++)
                    {
                        vm.pages.push(i);
                    }
                    vm.pageChange(vm.pages[--vm.currentpage]);
                    //  vm.pageChange(vm.pages[--vm.currentPage]);
                },
                function (error) { console.log(error); }
                );





        }
        function pageChange(page) {
            console.log("page  passed is", page);
            vm.pagedPost = [];
            vm.currentpage=page;
            var index=(page-1)*vm.countPerPage;
            var trackIndex = 0;
            for( var i=index; i<=vm.totalItems;i++)
            {
                vm.pagedPost.push(vm.Communicationlist[i]);
                trackIndex++;
                if(trackIndex==vm.countPerPage)
                {
                    break;
                }
            }

            
           

        }
    }
})();
