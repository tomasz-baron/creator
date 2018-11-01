angular.module('creator')
.component('userGroup', {
    controller: ['UserData', function(UserData) {
        this.$onInit = () => {
            this.value = UserData.getUserGroup();
        }

        this.saveUserGroup = () => {
            const val = this.value;
            const group = this.groups.find(({id}) => {
                if (id === +val)
                    return true;
            });
            UserData.setUserGroup({id: this.value, name: group.name});
        };

    }],
    bindings: { groups: '<' },
    templateUrl: 'src/user-group/user-group.html'
});
