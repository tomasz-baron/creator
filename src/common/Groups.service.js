angular.module('task')
.service('Groups', function($http) {
    return {
        getList: () => {
            return $http.get('./mock.json');
        }
    };
});
