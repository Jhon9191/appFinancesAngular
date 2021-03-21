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
                vm.billingCycles = {credits:[{}], debts:[{}]}
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true })
            })
        }


        vm.create = function(){
            $http.post(url, vm.billingCycles).then(function(response){
                vm.billingCycles = {}
                vm.refresh();
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(e){
                msgs.addError(e)
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

        vm.delete = function(){
            const deletUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deletUrl, vm.billingCycle).then(function(response){
                vm.refresh();
                msgs.addSuccess('Ciclo de pagamento excluido!')
            }).catch(function(e){
                msgs.addError(e)
            })
        }

        vm.update = function(){
            const putUrl = `${url}/${vm.billingCycle._id}`
            $http.put(putUrl, vm.billingCycle).then(function(response){
                vm.refresh();
                msgs.addSuccess('Ciclo de pagamento atualizado!')
            }).catch(function(e){
                msgs.addError(e)
            })
        }

        vm.refresh();
    }
})()