'use strict';

angular.module('yoslApp')
    .controller('AboutCtrl', function($scope, $http, envService) {
        var environment = envService.read('apiUrl');
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get(environment + 'link/count')
            .success(function(data) {
                console.log("NB bases: " + data);
                $scope.nbBases = data;
            });
    });