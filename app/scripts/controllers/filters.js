'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope, $scope) {

/*
    //Switch button
    $('#switch').bootstrapSwitch('state', $rootScope.show);

    $('#switch').bootstrapSwitch('onSwitchChange', function(){
        $rootScope.show = $('#switch').bootstrapSwitch('state');
    });    
*/

    $('#switch').click(function(){
      $rootScope.show = this.checked;
    });

    $rootScope.lang = "all";
    $scope.lang = "all";

    $rootScope.changeLang = function(){
      $rootScope.lang = $scope.lang;
    };

/*
      ++$scope.ind;
      if ($scope.ind >= Object.keys($scope.langs).length){
        $scope.ind = 0;
      }

      $rootScope.lang = $scope.langs[$scope.ind];

    }
*/
});