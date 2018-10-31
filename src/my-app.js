angular.module('creator', ['ui.router', 'ui.bootstrap'])
.component('myApp', {
    controller: ['$state', ($state) => {
        $state.go('loginDetails');
    }],
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
                    (error) => $q.reject('Don\'t fetch data')
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

});
