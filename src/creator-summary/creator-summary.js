angular.module('task')
.component('creatorSummary', {
    controller: ['$state', function($state) {
        this.$state = $state;
    }],
    templateUrl: 'src/creator-summary/creator-summary.html'
});
