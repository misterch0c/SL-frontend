var app = angular.module('yoslApp');

app.controller('menuCtrl', function($scope, $location) {

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});