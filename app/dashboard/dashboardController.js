(function(){
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ]) 
    function DashboardController($http) {
        const vm = this;
        vm.getSummary = function(){
            const url = 'http://localhost/api/billingSummary'
            $http.get(url).then(function(response){
                console.log(response.data.creditos)
                const { creditos = 0, debitos = 0} = response.data
                vm.creditos = creditos
                vm.debitos = debitos
                vm.total = creditos - debitos
            })
        }
    
        vm.getSummary()
    }
})()
