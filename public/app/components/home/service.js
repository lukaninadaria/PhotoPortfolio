/**
 * Created by dashyki on 04.01.2016.
 */
(function() {
    angular.module('app')
        .service("HomeService", ['AllPhotosResource', HomeService]);

    function HomeService(allPhotosResource) {
        this.getPhotos = function() {
            return allPhotosResource.query({}).$promise;
        }
    }
})();