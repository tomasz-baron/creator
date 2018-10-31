angular.module('creator')
.service('Groups', function($http) {
    return {
        getList: () => {
            return $http.get('./mock.json');
        }
    };
});
