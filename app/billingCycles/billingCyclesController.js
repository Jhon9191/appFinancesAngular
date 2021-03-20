(function(){
    angular.module('primeiraApp').controller('BillingCyclesCtrl',[
        '$http',
        BillingCyclesController
    ])

    function BillingCyclesController($http){
        const vm = this;
        vm.create = function(){
            const url = 'http://localhost/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle={}
                console.log("Success!")
            })
        }
    }
})()