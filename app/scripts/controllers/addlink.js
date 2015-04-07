'use strict';


angular.module('yoslApp')
    .controller('AddlinkCtrl', function($scope, $resource) {
        console.log("addlink controler");
        console.log($scope.title);

        $scope.test = function() {
            $resource('http://localhost:1337/link', {}, {}).query(function(data) {
                console.log(data);

            });
        };

        //Get returns an object, query returns an array
        $scope.addLink = function() {
            $resource('http://localhost:1337/link/create', {
                link: $scope.link,
                title: $scope.title,
                description: $scope.description,
                type: $scope.type,
                lang: $scope.lang
            }, {
                'create': {
                    method: 'POST',
                    isArray: false
                }
            })
                .get(function(data) {
                    console.log($scope.title);


                });
        };




    });