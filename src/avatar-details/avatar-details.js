angular.module('creator')
.component('avatarDetails', {
    controller: ['$uibModal', 'UserData', function($uibModal, UserData) {
        const avatar_preview = document.getElementById('avatar-preview');
        this.$onInit = () =>  {
            this.avatar = UserData.getUserAvatar();
            if (this.avatar) {
                avatar_preview.src = this.avatar;
            }
        };

        this.openUploadModal = () => {
            $uibModal.open({
                component: 'avatarModal',
            }).result.then((result) => {
                this.avatar = result;
                UserData.setUserAvatar(result);
                avatar_preview.src = result;
            });
        };
    }],
    templateUrl: 'src/avatar-details/avatar-details.html'
});