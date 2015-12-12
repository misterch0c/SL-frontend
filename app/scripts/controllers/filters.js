'use strict';

var app = angular.module('yoslApp');


app.controller('FiltersCtrl', function($rootScope, $scope) {
    //Bootsrap Switch
    $(document).ready(function() {
        $('[name="switch"]').bootstrapSwitch('state', $rootScope.show);
    });
    $('#switch').on('switchChange.bootstrapSwitch', function(event, state) {
        $rootScope.show = state;
        $rootScope.limit = 20;
        $rootScope.skip = 0;
        $rootScope.resetFilters();
        $rootScope.links = [];
        $rootScope.blogs = [];
        $rootScope.$apply();
    });


});

app.filter('filterLinks', function() {

    return function(items, lang, hideDown, tags, sortBy, priv) {

        var result = [];

        angular.forEach(items, function(item) {

            /*
            //Vérifie si le lien contient les tags (avec un OR, pour un AND retirer le ELSE en commentaire)
            var containTags = tags.length == 0 ? true : false;

            angular.forEach(tags, function(tag) {
                if (item.tags.indexOf(tag) != -1) {
                    containTags = true;
                }
            
				//else {
				//	containTags = false;
				//}
				
            });
            */

            //Continue si le lien contient les tags
            //et si lang est vide ou le lien est de cette langue : on l'ajoute
            if (lang == "" || item.lang == lang) {
                //si le checkbox hideDownLinks est a true, on vérifie que le lien est UP
                if (!hideDown || item.isup) {

                    if (!priv || item.private)

                        result.push(item);
                }
            }
        });

        var sort;
        var order;
        if (sortBy.indexOf("%20ASC")!= -1){
            sort = sortBy.replace("%20ASC", "");
            order = true;
        }
        else { // if (sortBy.indexOf("%20DESC")!= -1){
            sort = sortBy.replace("%20DESC", "");
            order = false;
        }
        //console.log(sort);
        result.sort(function(a, b){
            if (a[sort] && b[sort]) {
                if (order){
                    return a[sort].localeCompare(b[sort]);
                }
                else
                    return b[sort].localeCompare(a[sort]);
            }
            return 0;
        });

        return result;
    };

});