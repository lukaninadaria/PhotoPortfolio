/**
 * Created by dashyki on 04.01.2016.
 */
(function(){
    angular.module('app')
        .controller('MenController', ['$scope', 'PhotoService', MenController]);

    function MenController($scope, photoService) {
        $scope.photos = "";
        photoService.getMen()
            .then(function(res) {
                $scope.photos = res;
            });
    }
})();