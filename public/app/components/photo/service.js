/**
 * Created by dashyki on 04.01.2016.
 */
(function() {
    angular.module('app')
        .service("PhotoService", ['AllPhotosResource', 'WomenPhotosResource', PhotoService]);

    function PhotoService(allPhotosResource, womenPhotosResource) {
        this.getPhotos = function() {
            return allPhotosResource.query({}).$promise;
        };

        this.getWomen = function() {
            return womenPhotosResource.query({}).$promise;
        };
    }
})();