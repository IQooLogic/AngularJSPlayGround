angular.module('app.name.controllers', [])
        .controller('ControllerName', ['$scope',
            function ($scope) {
                $scope.app = {
                    name: 'AngularJSPlayGround',
                    version: '1.0',
                    author: 'Milos Stojkovic',
                    lastBuild: new Date()
                };
                $scope.doSomeWork = function () {
                    alert('Doing some work ...');
                };
            }])
        .controller('404Controller',
                function () {
                });