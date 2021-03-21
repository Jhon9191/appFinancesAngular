(function(){
    angular.module('primeiraApp').controller('BillingCyclesCtrl',[
        '$http',
        'msgs',
        'tabs',
        BillingCyclesController
    ])

    function BillingCyclesController($http, msgs, tabs){
        const vm = this;
        const url = 'http://localhost/api/billingCycles'

        vm.refresh = function(){
            $http.get(url).then(function(response){
                vm.billingCycles = {}
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true })
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

        vm.showTabUpdate = function(billingCycle){
            vm.billingCycle = billingCycle;
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = function(billingCycle){
            vm.billingCycle = billingCycle;
            tabs.show(vm, { tabDelete: true })
        }

        vm.refresh();
    }
})()