'use strict';


//THIS CONTROLLER IS NOT USED CYKA
angular.module('yoslApp')
    .controller('BlogsCtrl', function($scope, $rootScope, $resource, $http, envService) {

        $rootScope.resetFilters();
	
        $rootScope.links = [];
        $rootScope.type = 'Blog';
	    $rootScope.nextLinks($rootScope.links, $rootScope.type);

    });