(function(){
    angular.module('primeiraApp').controller('BillingCyclesCtrl',[
        '$http',
        'msgs',
        BillingCyclesController
    ])

    function BillingCyclesController($http, msgs){
        const vm = this;
        const url = 'http://localhost/api/billingCycles'

        vm.refresh = function(){
            $http.get(url).then(function(response){
                vm.billingCycles = {}
                vm.billingCycles = response.data
            })
        }


        vm.create = function(){
            $http.post(url, vm.billingCycles).then(function(response){
                vm.billingCycles = {}
                vm.refresh();
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(response){
                msgs.addError(response.data.erros)
            })
        }
        vm.refresh();
    }
})()