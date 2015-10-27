var app = angular.module('yoslApp');

app.controller('menuCtrl', function($scope, $location) {

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    //Lang Filter
    $scope.lang = "";
    $scope.changeLang = function() {
        $scope.lang = $scope.lang;
    };

    //Sort By Filter
    $scope.sortBy = "title";
    $scope.changeSortBy = function() {
        $scope.sortBy = $scope.sortBy;
    };

    //Hide down links Filter
    $scope.toggleHideDown = function() {
        $scope.hideDownLinks = !$scope.hideDownLinks;
    };

    //Tags Fitler
    $scope.tags = [];

    $('[data-role="tagsinput"]').tagsinput({
        maxChars: 10
    });
    $('[data-role="tagsinput"]').on('itemAdded', function(event) {
        $scope.tags.push(event.item);
        $scope.$apply();
    });
    $('[data-role="tagsinput"]').on('itemRemoved', function(event) {
        $scope.tags.splice($scope.tags.indexOf(event.item), 1);
        $scope.$apply();
    });

});
