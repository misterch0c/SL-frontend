'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope, $scope) {
    //console.log('hii');
    //Bootsrap Switch
    $(document).ready(function() {
        $('[name="switch"]').bootstrapSwitch('state', $rootScope.show);
    });
    $('#switch').on('switchChange.bootstrapSwitch', function(event, state) {
        $rootScope.show = state;
        $rootScope.$apply();
    });


});

app.filter('filterLinks', function() {

    return function(items, lang, hideDown, tags) {

        var result = [];

        angular.forEach(items, function(item) {

            //Vérifie si le lien contient les tags (avec un OR, pour un AND retirer le ELSE en commentaire)
            var containTags = tags.length == 0 ? true : false;

            angular.forEach(tags, function(tag) {
                if (item.tags.indexOf(tag) != -1) {
                    containTags = true;
                }
                /*
				else {
					containTags = false;
				}
				*/
            });

            //Continue si le lien contient les tags
            //et si lang est vide ou le lien est de cette langue : on l'ajoute
            if (containTags && (lang == "" || item.lang == lang)) {
                //si le checkbox hideDownLinks est a true, on vérifie que le lien est UP
                if (!hideDown || item.isup) {
                    result.push(item);
                }
            }
        });

        return result;
    };

});