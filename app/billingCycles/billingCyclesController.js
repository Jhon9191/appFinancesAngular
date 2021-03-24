(function () {
    angular.module('primeiraApp').controller('BillingCyclesCtrl', [
        '$http',
        'msgs',
        'tabs',
        '$location',
        BillingCyclesController
    ])

    function BillingCyclesController($http, msgs, tabs, $location) {
        const vm = this;
        const url = 'http://localhost/api/billingCycles'

        vm.refresh = function () {
            const page = parseInt($location.search().page || 1)
            $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`).then(function (response) {
                vm.billingCycle = { creditos: [{}], debitos: [{}] }
                vm.billingCycles = response.data
                vm.calculateValue()
                tabs.show(vm, { tabList: true, tabCreate: true })
                $http.get(`${url}/count`).then(function (response) {
                    vm.pages = Math.ceil(response.data.value/10)
                    console.log("pages = ", vm.pages)
                }).catch(function (e) {
                 
                })
            })
        }


        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function (response) {
                msgs.addSuccess('Operação realizada com sucesso!')
                vm.refresh();
            }).catch(function (e) {
                msgs.addError(e)
            })
        }

        vm.showTabUpdate = function (billingCycle) {
            vm.billingCycle = billingCycle;
            tabs.show(vm, { tabUpdate: true })
            vm.calculateValue()
        }

        vm.showTabDelete = function (billingCycle) {
            vm.billingCycle = billingCycle;
            tabs.show(vm, { tabDelete: true })
            vm.calculateValue()
        }

        vm.delete = function () {
            const deletUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deletUrl, vm.billingCycle).then(function (response) {
                msgs.addSuccess('Ciclo de pagamento excluido!')
                vm.refresh();
            }).catch(function (e) {
                msgs.addError(e)
            })
        }

        vm.update = function () {
            const putUrl = `${url}/${vm.billingCycle._id}`
            $http.put(putUrl, vm.billingCycle).then(function (response) {
                vm.refresh();
                msgs.addSuccess('Ciclo de pagamento atualizado!')
            }).catch(function (e) {
                msgs.addError(e)
            })
        }

        vm.addCredit = function (index) { 
            vm.billingCycle.credits.splice(index + 1, 0, {})
        }

        vm.cloneCredit = function (index, { name, value }) {
            vm.billingCycle.credits.splice(index + 1, 0, { name, value })
            vm.calculateValue()
        }

        vm.deleteCredit = function (index) {
            console.log("clcique")
            if (vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index , 1)
                vm.calculateValue()
            }
        }

        vm.addDebt = function (index) {
            vm.billingCycle.debts.splice(index + 1, 0, {})
        }

        vm.cloneDebt = function (index, { name, value, status }) {
            vm.billingCycle.debts.splice(index + 1, 0, { name, value, status })
            vm.calculateValue()
        }

        vm.deleteDebt = function (index) {
            if (vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index , 1)
                vm.calculateValue()
            }
        }

        vm.calculateValue = function(){
            vm.credit = 0
            vm.debt = 0

            if(vm.billingCycle){
                vm.billingCycle.creditos.forEach(function({value}){
                    vm.credit += !value || isNaN(value) ? 0 : parseFloat(value)
                })
                vm.billingCycle.debitos.forEach(function({value}){
                    vm.debt += !value || isNaN(value) ? 0 : parseFloat(value)
                })
            }

            vm.total = vm.credit + vm.debt
        }

        vm.refresh();
    }
})()