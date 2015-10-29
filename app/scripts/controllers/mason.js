'use strict';


angular.module('yoslApp')
    .controller('MasonCtrl', function($scope, $resource, $http, envService) {

      var environment = envService.read('apiUrl');
      console.log(environment);
      $scope.bricks=['aaaaaaaaa','bbbbbbbbbb'];
        console.log("mason controler");



    });
