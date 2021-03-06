angular.module('app.name.services', [])
        .factory('Interceptor', function ($q) {
            return {
                response: function (response) {
                    return response || $q.when(response);
                },
                responseError: function (response) {
                    var status = response.status;
                    var config = response.config;
                    if (config !== undefined) {
                        var method = config.method;
                        var url = config.url;
                        switch (status) {
                            case 400:

                                break;
                            case 401:

                                break;
                            case 403:

                                break;
                            case 404:

                                break;
                        }
                    }

                    return $q.reject(response);
                },
                request: function (request) {
                    return request || $q.when(request);
                },
                requestError: function (request) {
                    return $q.reject(request);
                }
            };
        });