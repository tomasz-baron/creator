angular.module('task')
.directive('verifyPassword',  function() {
    return {
        require: "ngModel",
        scope: {
            password: "=verifyPassword"
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.compare = (modelValue) => {
                return modelValue == scope.password;
            };
 
            scope.$watch('password', () => {
                ngModel.$validate();
            });
        }
    };
});
