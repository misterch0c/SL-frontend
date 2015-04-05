'use strict';


angular.module('yoslApp')
  .controller('AddlinkCtrl', function ($scope) {
    console.log("addlink controler");


      	$scope.test = function () {
		console.log($scope.title);
		console.log($scope.link);
		console.log($scope.descr);
	};

  });


