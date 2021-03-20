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
                vm.billingCycle = {}
                vm.billingCycle = response.data
            })
        },


        vm.create = function(){
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle={}
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(E){
                msgs.addError('Operação não pode ser realizada!')
            })
        }
    }
})()