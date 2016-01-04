/**
 * Created by dashyki on 04.01.2016.
 */
(function() {
    angular.module('app')
        .factory("WomenPhotosResource", ['$resource', womenPhotosResource]);

    function womenPhotosResource($resource) {
        return $resource('/api/photos/women',
            {query : {method : 'JSONP', isArray : true}});
    };
})();