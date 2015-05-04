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
			$('[name="switch"]').bootstrapSwitch('state', $rootScope.show);
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

		$rootScope.sortBy = "title";
		$scope.sortBy = "title";
		$rootScope.changeSortBy = function(){
			$rootScope.sortBy = $scope.sortBy;
		};

		$rootScope.hideDownLinks = false;
		$rootScope.toggleHideDown = function() {
			$rootScope.hideDownLinks = !$rootScope.hideDownLinks;
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