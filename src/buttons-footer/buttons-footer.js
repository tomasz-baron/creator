angular.module('creator')
.component('buttonsFooter', {
    controller: ['$state', '$window', function($state, $window) {
        this.$state = $state;

        this.next = () => {
            $state.go(this.nextState);
        };
        this.cancel = () => {
            $window.history.back();
        };
    }],
    bindings: { 
        nextState: '@',
        disabled: '<',
        onNext: '&'
    },
    templateUrl: 'src/buttons-footer/buttons-footer.html'
});
