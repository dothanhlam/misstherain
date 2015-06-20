'use strict';

/**
 * @ngdoc function
 * @name misstherainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the misstherainApp
 */
angular.module('misstherainApp')
  .controller('MainCtrl', function ($scope, ngAudio) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'heroku'
    ];

    $scope.sound = ngAudio.load("sounds/Nature-sounds-rain.mp3");
    $scope.sound.play();
    $scope.sound.loop = true;


    $scope.song = ngAudio.load("songs/Kiss The Rain.mp3");
    $scope.song.play();
    $scope.song.loop = true;
  });
