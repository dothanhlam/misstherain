'use strict';

/**
 * @ngdoc service
 * @name misstherainApp.Themes
 * @description
 * # Themes
 * Service in the misstherainApp.
 */
angular.module('misstherainApp')
  .service('Themes', function ($http) {
    return {
      getThemes: function() {
        return $http.get("themes.json").then(function (response) {
          return {
            items: response.data.items,
            rainy: response.data.rainymood
          }
        });
      }
    }
  });
