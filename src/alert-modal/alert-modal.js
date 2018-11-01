angular.module('creator')
.component('alertModal', {
    bindings: {
        modalInstance: '<',
        resolve: '<'
    },
    controller: function() {
        this.closeModal = () => {
            this.modalInstance.dismiss('ok');
        };

    },
    templateUrl: 'src/alert-modal/alert-modal.html'
});
