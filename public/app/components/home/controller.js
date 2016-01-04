/**
 * Created by dashyki on 28.12.2015.
 */
(function() {
    angular.module('app')
        .controller("HomeController", ['$scope', 'PhotoService', HomeController]);

    function HomeController($scope, homeService) {
        $scope.lalala = "LALALA";
        $scope.photos = "";
        homeService.getPhotos()
            .then(function(res) {
                $scope.photos = res;
            });
    }
})();