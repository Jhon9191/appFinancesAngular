(function(){
    angular.module('primeiraApp').component('valueBox', {
        bindings: {
            grid: '@',
            collorClass: '@',
            value: '@',
            text: '@',
            iconClass: '@',
            gridClasses: '@'
        },
        controller: [
            'gridSystem',
            function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
    
        template: `
        <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.collorClass }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="fa {{ $ctrl.iconClass }}"> </i>
            </div>
        </div>
    </div>
        `
    })
})()