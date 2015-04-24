'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope, $scope) {

    //Switch button
    $('#switch').bootstrapSwitch('state', $rootScope.show);

    $('#switch').bootstrapSwitch('onSwitchChange', function(){
        $rootScope.show = $('#switch').bootstrapSwitch('state');
    });

    $scope.langs = {0:"ALL", 1:"FR", 2:"US", 3:"ES"};
    $scope.ind = 0;

    $rootScope.lang = "ALL";

    $rootScope.changeLang = function(){

      ++$scope.ind;
      if ($scope.ind >= Object.keys($scope.langs).length){
        $scope.ind = 0;
      }

      $rootScope.lang = $scope.langs[$scope.ind];

    }

});