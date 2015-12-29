/**
 * Created by dashyki on 29.12.2015.
 */
(function() {
    angular.module('app')
        .factory("AllPhotosResource", ['$resource', allPhotosResource]);

    function allPhotosResource($resource) {
        return $resource('/api/photos',
            {get : {method : 'JSONP'}});
    };
})();