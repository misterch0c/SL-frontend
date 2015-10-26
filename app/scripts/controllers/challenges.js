'use strict';


angular.module('yoslApp')
    .controller('ChallCtrl', function($scope, $resource, $http) {

      $scope.getchall = function() {
        $http.get("http://localhost:1337/link?type=Challenge").success(function(data){
          $scope.challenges=data;
          console.log("got chall");
          console.log(data);
        });

      };
        console.log("challenges controler");
        $scope.getchall();


    });
