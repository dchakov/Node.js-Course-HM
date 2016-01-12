app.factory('create', function($http, $q, CourseResource) {
    return {
        createRealEstate: function(realEstate) {
            var deferred = $q.defer();

            var realEstate = new CourseResource(realEstate);
            realEstate.$save().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }
})
