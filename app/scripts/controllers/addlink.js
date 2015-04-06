'use strict';


angular.module('yoslApp')
  .controller('AddlinkCtrl', function ($scope,$http) {
    console.log("addlink controler");


      	$scope.test = function ($scope) {
   			 $http.get('http://localhost:1337/link').
       		 success(function(data) {
            console.log(data);
        });
	};

  });


