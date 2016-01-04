/**
 * Created by dashyki on 04.01.2016.
 */
(function(){
    angular.module('app')
        .controller('WomenController', ['$scope', 'PhotoService', WomenController]);

    function WomenController($scope, photoService) {
        $scope.photos = "";
        photoService.getWomen()
            .then(function(res) {
                $scope.photos = res;
            });
    }
})();
