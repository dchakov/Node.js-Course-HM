app.factory('CourseResource', function($resource) {
    var CourseResource = $resource('/api/realEstates/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return CourseResource;
})