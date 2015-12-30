/**
 * Created by dashyki on 28.12.2015.
 */
(function() {
    angular.module('app')
        .controller("HomeController", ['$scope', 'AllPhotosResource', HomeController]);

    function HomeController($scope, AllPhotosResource) {
        $scope.lalala = "LALALA";
        $scope.photos = "";
        AllPhotosResource.query({}).$promise
            .then(function(res) {
                $scope.photos = res;
            });
    }
})();