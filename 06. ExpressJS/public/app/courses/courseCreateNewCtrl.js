app.controller('CreateNewCtrl', function($scope, $location, create, notifier) {
    $scope.createRealEstate = function(realEstate) {
        create.createRealEstate(realEstate).then(function() {
            notifier.success('Creation successful!');
        })
    }
});
