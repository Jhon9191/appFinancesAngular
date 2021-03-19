(function(){
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ]) 
    function DashboardController($http) {
        const vm = this;
        vm.getSummary = function(){
            const url = 'http://localhost/api/billingCycles'
            $http.get(url).then(function(response){
                const { credit = 0, debt = 0 } = response.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }
    
        return vm.getSummary()
    }

})()
