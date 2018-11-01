angular.module('creator', ['ui.router', 'ui.bootstrap'])
.component('myApp', {
    templateUrl: 'src/my-app.html'
})
.config(($stateProvider, $urlServiceProvider) => {
    $urlServiceProvider.rules.otherwise({ state: 'loginDetails' });
    $stateProvider
    .state('loginDetails', {
        url: '/loginDetails',
        component: 'loginDetails'
    })
    .state('userGroup', {
        url: '/userGroup',
        component: 'userGroup',
        resolve: {
            groups: ['$q', 'Groups', ($q, Groups) => {                    
                return Groups.getList().then(
                    (response) => response.data,
                    (error) => {
                        const message = 'List of groups not found. Try again later.';
                        //alert(message);
                        return $q.reject(message);
                    }
                );
            }]
        }
    })
    .state('avatarDetails', {
        url: '/avatarDetails',
        component: 'avatarDetails'
    })
    .state('userSummary', {
        url: '/userSummary',
        component: 'userSummary'
    });

})

.run(['$state', '$uibModal', function($state, $uibModal){
    $state.go('loginDetails');
    $state.defaultErrorHandler(function(error) {
        console.log('Error: ', error.detail);
        $uibModal.open({
            openedClass: 'alert-modal',
            component: 'alertModal',
            resolve: {
                message: function () {
                    return error.detail;
                }
            }
        });
    });
}]);