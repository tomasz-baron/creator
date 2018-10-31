angular.module('task')
.directive('imageSource', [function () {
    return {
        scope: {
            imageSource: "="
        },
        link: function (scope, element, attributes) {
            element.bind('change', function (changeEvent) {
                const reader = new FileReader();
                reader.onload = (loadEvent) => {
                    scope.$apply(() => {
                        scope.imageSource = loadEvent.target.result;
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    };
}])