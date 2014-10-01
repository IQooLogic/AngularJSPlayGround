angular.module('app.name', [
    'ngRoute',
    'app.name.filters',
    'app.name.services',
    'app.name.directives',
    'app.name.controllers',
    'ngResource',
    'ngCookies',
    'ui.bootstrap',
    'ngSanitize'])
        .config(['$routeProvider', '$locationProvider', '$httpProvider', '$provide', function($routeProvider, $locationProvider, $httpProvider, $provide) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];

                $provide.decorator('$q', ['$delegate', '$rootScope', function($delegate, $rootScope) {
                        var pendingPromisses = 0;
                        $rootScope.$watch(
                                function() {
                                    return pendingPromisses > 0;
                                },
                                function(loading) {
                                    $rootScope.loading = loading;
                                }
                        );
                        var $q = $delegate;
                        var origDefer = $q.defer;
                        $q.defer = function() {
                            var defer = origDefer();
                            pendingPromisses++;
                            defer.promise.finally(function() {
                                pendingPromisses--;
                            });
                            return defer;
                        };
                        return $q;
                    }]);

                $routeProvider.when('/', {
                    redirectTo: '/url1'
                });
                $routeProvider.when('/url1/', {
                    templateUrl: 'partials/page.html',
                    controller: 'ControllerName'
                });
                $routeProvider.when('/404/', {
                    templateUrl: 'partials/404.html',
                    controller: '404Controller'
                });
                $routeProvider.otherwise({
                    redirectTo: '/404'
                });

                $locationProvider.hashPrefix('!').html5Mode(false);
                $httpProvider.interceptors.push('Interceptor');
            }])
        .run(function($rootScope) {
            $rootScope.$on('$viewContentLoaded', function(event) {

            });
            $rootScope.$on('$routeChangeSuccess', function() {

            });

            $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

            });
        });