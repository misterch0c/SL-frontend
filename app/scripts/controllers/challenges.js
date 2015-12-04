'use strict';


angular.module('yoslApp')
    .controller('ChallCtrl', function($scope, $resource, $http, envService) {

        var environment = envService.read('apiUrl');
        $scope.getchall = function() {
            $http.get(environment + 'link/get?type=Challenge').success(function(data) {
                $scope.challenges = data;

            });

        };
        $scope.getchall();


    });