'use strict';


var app = angular.module('yoslApp');

app.factory('Links' , function($resource) {
return $resource('http://localhost:1337/link', null,
    {
        'whereLang': { method:'GET', params:{lang:'@lang'}, isArray:true },
        'whereType': { method:'GET', params:{type:'@type'}, isArray:true },
        'where': { method:'GET', params:{lang:'@lang', type:'@type'}, isArray:true }
    });
});

app.controller('HomeCtrl', function ($scope, Links) {
    console.log("home controler");
	
	//Get links by lang (us)
	$scope.links = Links.whereLang({lang:'us'});
		
	//Get links by type (board)
	//$scope.links = Links.whereType({type:'board'});

	//Get links by lang and by type
	//$scope.links = Links.where({lang:'us', type:'board'});
	
	/* 
	  $resource('http://localhost:1337/link',{},{}).query(function(data){
		$scope.links=data;
		console.log($scope.links);   			  
	 });      
	*/
  });


