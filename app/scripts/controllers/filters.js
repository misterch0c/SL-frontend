'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope) {

    //Switch button
    $('[name="switch"]').bootstrapSwitch();
    if ($rootScope.show === null){
        // console.log($rootScope.show);
        $rootScope.show = true;
    }
    $('#switch').bootstrapSwitch('state', $rootScope.show, false);

    $rootScope.changeShow = function() {
    	$rootScope.show = !$rootScope.show;     
    };

});