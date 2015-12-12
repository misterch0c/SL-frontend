'use strict';

angular.module('yoslApp')
  .controller('IrcCtrl', function($scope, $rootScope, $resource, $http, envService) {
    

    //$scope.getChan();
    $rootScope.resetFilters();



    $scope.isLink = function(str) {
        return validator.isURL(str);
    }

  });
