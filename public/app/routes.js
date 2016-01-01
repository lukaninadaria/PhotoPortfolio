/**
 * Created by dashyki on 01.01.2016.
 */
angular.module('app')
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/components/home/home.html',
                    controller: 'HomeController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);