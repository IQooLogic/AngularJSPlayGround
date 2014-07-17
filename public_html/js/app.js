var app = angular.module('appName', ['ngResource', 'ui.bootstrap']);

function AppController($rootScope, $scope){
    $scope.todo = 'TODO write content';
    $scope.app = {
        name: 'AngularJSPlayGround',
        version: '1.0',
        author: 'Milos Stojkovic',
        lastBuild: new Date()
    };
    $scope.doSomeWork = function(){
        alert('Doing some work ...');
    };
}