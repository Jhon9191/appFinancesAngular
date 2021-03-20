(function(){
    angular.module('primeiraApp').controller('BillingCyclesCtrl',[
        '$http',
        'msgs',
        BillingCyclesController
    ])

    function BillingCyclesController($http, msgs){
        const vm = this;
        vm.create = function(){
            const url = 'http://localhost/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle={}
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(E){
                msgs.addError('Operação não pode ser realizada!')
            })
        }
    }
})()