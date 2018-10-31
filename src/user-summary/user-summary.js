angular.module('task')
.component('userSummary', {
    controller: ['UserData', function(UserData) {
        this.$onInit = () => {
            this.userData = UserData.getUserData();
            document.getElementById('avatar-preview').src = this.userData.avatar;
        };
    }],
    templateUrl: 'src/user-summary/user-summary.html'
});
