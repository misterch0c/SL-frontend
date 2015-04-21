'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope) {

    //Switch button
    $('#switch').bootstrapSwitch('state', $rootScope.show);

    $('#switch').bootstrapSwitch('onSwitchChange', function(){
        $rootScope.show = $('#switch').bootstrapSwitch('state');
    });

});