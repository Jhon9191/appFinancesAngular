 angular.module('primeiraApp').component('formComponent', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            readonly: '<',
        },
        controller: [
            'gridSystem',
            function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
        <div class="{{ $ctrl.gridClasses }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input ng-readonly="$ctrl.readonly" ng-model="$ctrl.model" type="{{$ctrl.type}}" id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}">
            </div>
        </div>
        `
    })