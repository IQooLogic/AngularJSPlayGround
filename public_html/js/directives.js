angular.module('app.name.directives', [])
        .directive('directiveName', function () {
            return {
                restrict: 'C',
                scope: false,
                link: function (scope, element, attrs) {

                }
            };
        });