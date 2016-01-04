/**
 * Created by dashyki on 04.01.2016.
 */
(function() {
    angular.module('app')
        .service("PhotoService", ['AllPhotosResource', PhotoService]);

    function PhotoService(allPhotosResource) {
        this.getPhotos = function() {
            return allPhotosResource.query({}).$promise;
        }
    }
})();