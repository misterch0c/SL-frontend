'use strict';


angular.module('yoslApp')
    .controller('ChallCtrl', function($scope, $resource, $http, envService) {

        var environment = envService.read('apiUrl');
        //console.log(environment);
        $scope.getchall = function() {
            $http.get(environment + 'link?type=Challenge').success(function(data) {
                $scope.challenges = data;
                // console.log("got chall");
                // console.log(data);
            });

        };
        //console.log("challenges controler");
        $scope.getchall();


    });