/**
 * Created by dashyki on 28.12.2015.
 */
(function() {
    angular.module('app')
        .controller("HomeController", ['$scope', 'PhotoService', HomeController]);

    function HomeController($scope, photoService) {
        $scope.photos = "";
        photoService.getPhotos()
            .then(function(res) {
                $scope.photos = res;
            });
    }
})();