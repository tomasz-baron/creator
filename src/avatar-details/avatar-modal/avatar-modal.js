angular.module('task')
.component('avatarModal', {
    bindings: {
        modalInstance: '<'
    },
    controller: [function() {
        this.$onInit = () => {
            this.avatar = '';

            var input = document.querySelector('.input-avatar');
            input.addEventListener('change', (event) => {
                const fileName = event.target.value.split( '\\' ).pop();
                if (fileName) {
                    document.querySelector('.file-name').innerHTML = fileName;
                }
            });
        };

        this.saveAvatar = () => {
            this.modalInstance.close(this.avatar);
        };

        this.closeModal = () => {
            this.modalInstance.dismiss('cancel');
        };

    }],
    templateUrl: 'src/avatar-details/avatar-modal/avatar-modal.html'
});
