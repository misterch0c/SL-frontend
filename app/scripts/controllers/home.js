'use strict';

var app = angular.module('yoslApp');

app.factory('Links', function($resource) {
    return $resource('http://localhost:1337/link', null, {
        'whereLang': {
            method: 'GET',
            params: {
                lang: '@lang'
            },
            isArray: true
        },
        'whereType': {
            method: 'GET',
            params: {
                type: '@type'
            },
            isArray: true
        },
        'where': {
            method: 'GET',
            params: {
                lang: '@lang',
                type: '@type'
            },
            isArray: true
        }
    });
});



app.directive('bsPopover', function() {
    return function(scope, element, attrs) {
        element.find("a[rel=popover]").popover({
            placement: 'auto',
            html: 'true',
            trigger: 'focus hover'
        });
    };
});



app.controller('HomeCtrl', function($scope, $rootScope, $state, Links) {
    console.log("home controler");

    //Get links by lang (us)
    $scope.links = Links.query();
    console.log($scope.links);

    console.log($rootScope.show);


    $rootScope.switchz = function() {
    	if ($rootScope.show==null){
    		$rootScope.show=true;
    	}

        if ($rootScope.show) {
            $state.go('test');

        } else {
            $state.go('home');
        }
        $rootScope.show = !$rootScope.show;
        console.log($rootScope.show);

    }


    //Switch button
    if ($('[data-toggle="switch"]').length) {
        $('[data-toggle="switch"]').bootstrapSwitch();
    }

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