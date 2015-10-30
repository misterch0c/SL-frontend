'use strict';


angular.module('yoslApp')
  .controller('BlogsCtrl', function($scope, $resource, $http, envService) {

    var environment = envService.read('apiUrl');
    console.log(environment);
    $scope.bricks = ['aaaaaaaaa', 'bbbbbbbbbb'];
    console.log("blogs controler");
    $scope.languages = ['es', 'fr', 'de', 'us', 'ru', 'ro', 'tr', 'ir', 'pl', 'az', 'cn', 'vn', 'ae'];


    $http.get(environment + 'link?type=Blog')
      .success(function(data) {
        console.log("get blogs " + data);
        $scope.blogs = data;
      });



  });
