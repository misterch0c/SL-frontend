'use strict';

/**
 * @ngdoc function
 * @name yoslApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoslApp
 */
angular.module('yoslApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
