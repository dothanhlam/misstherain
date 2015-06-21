'use strict';

/**
 * @ngdoc service
 * @name misstherainApp.Weather
 * @description
 * # Weather
 * Service in the misstherainApp.
 */
angular.module('misstherainApp')
  .service('Weather', function () {
    if (navigator.geolocation) {

    }
    else {
      // fallback
    }
  });
