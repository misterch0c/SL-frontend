'use strict';

/**
 * @ngdoc function
 * @name yoslApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoslApp
 */
angular.module('yoslApp')

  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('main');


  });
