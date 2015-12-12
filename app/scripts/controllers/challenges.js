'use strict';


angular.module('yoslApp')
    .controller('ChallCtrl', function($scope, $rootScope, $resource, $http, envService) {
	    $rootScope.resetFilters();

        $scope.getchall = function() {
            $http.get($rootScope.environment + 'link/get?type=Challenge').success(function(data) {
                $scope.challenges = data;

            });

        };
        $scope.getchall();


    });