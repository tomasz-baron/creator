angular.module('task')
.component('loginDetails', {
    controller: ['UserData', function(UserData) {
        this.$onInit = () => {
            this.data = UserData.getUserDetails();
        };

        this.saveDetails = () => {
            UserData.setUserDetails(this.data);
        };
    }],
    templateUrl: 'src/login-details/login-details.html'
});
