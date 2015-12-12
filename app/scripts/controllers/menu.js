'use strict';
var app = angular.module('yoslApp');

app.controller('menuCtrl', function($scope, $location, $rootScope) {

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    $rootScope.resetFilters = function(){

        $rootScope.limit = 20;
        $rootScope.skip = 0;
    
        $rootScope.lang = "";
        $scope.lang = "";

        $rootScope.sortBy = "title%20ASC";
        $scope.sortBy = "title%20ASC";

        $rootScope.hideDownLinks = false;

        $rootScope.showPrivate = false;
    }

    $rootScope.resetFilters();

    $scope.changeFilters = function(){
        //Grab the links only if switch is panel, not raw
        if (!$rootScope.show){
            $rootScope.limit = 20;
            $rootScope.skip = 0;
            $rootScope.links = [];
        
            $rootScope.nextLinks($rootScope.links, $rootScope.type);
        }
    }

    //Lang Filter
    $scope.changeLang = function() {
        $rootScope.lang = $scope.lang;
        $scope.changeFilters();
    };

    //Sort By Filter
    $scope.changeSortBy = function() {
        $rootScope.sortBy = $scope.sortBy;
        $scope.changeFilters();
        //console.log($rootScope.sortBy);
    };

    //Hide down links Filter
    $scope.toggleHideDown = function() {
        $rootScope.hideDownLinks = !$rootScope.hideDownLinks;
        $scope.changeFilters();
    };

    //Show only private links
    $scope.toggleShowPrivate = function() {
        $rootScope.showPrivate = !$rootScope.showPrivate;
        $scope.changeFilters();
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
