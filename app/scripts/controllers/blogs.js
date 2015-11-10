'use strict';


//THIS CONTROLLER IS NOT USED CYKA
angular.module('yoslApp')
    .controller('BlogsCtrl', function($scope, $resource, $http, envService) {

    $http.get(environment + 'link?type=Blog&limit=0').success(function(data) {
        $scope.rawBlogs = data;
    });

        var environment = envService.read('apiUrl');
        //console.log("blogs controler");
        $scope.languages = ['es', 'fr', 'de', 'us', 'ru', 'ro', 'tr', 'ir', 'pl', 'az', 'cn', 'vn', 'ae'];


        $http.get(environment + 'link?limit=0&type=Blog')
            .success(function(data) {
                //console.log("get blogs " + data);
                $scope.blogs = data;
            });



    });