'use strict';


angular.module('yoslApp')
  .controller('HomeCtrl', function ($scope,$resource) {
    console.log("home controler");

   			 $resource('http://localhost:1337/link',{},{}).query(function(data){
   			 	$scope.links=data;
          console.log($scope.links);
   			  
   			 });      
		




  });


