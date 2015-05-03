'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope, $scope) {

/*
		//Switch button
		$('#switch').bootstrapSwitch('state', $rootScope.show);
*/
		$('#switch').on('switchChange.bootstrapSwitch', function(event, state) {
				$rootScope.show = state;				
				$rootScope.$apply();

		});    

		$(document).ready(function() {
			$('[name="switch"]').bootstrapSwitch();
		});

/*
		$('#switch').click(function(){
			$rootScope.show = this.checked;
		});
*/
		$rootScope.lang = "";
		$scope.lang = "";

		$rootScope.changeLang = function(){
			$rootScope.lang = $scope.lang;
		};

/*
			++$scope.ind;
			if ($scope.ind >= Object.keys($scope.langs).length){
				$scope.ind = 0;
			}

			$rootScope.lang = $scope.langs[$scope.ind];

		}
*/
});