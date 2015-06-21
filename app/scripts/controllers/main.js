'use strict';

/**
 * @ngdoc function
 * @name misstherainApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the misstherainApp
 */
angular.module('misstherainApp')
  .controller('MainCtrl', function ($scope, ngAudio, Themes) {
    $scope.isPlaying = false;
    $scope.isRaining = false;
    $scope.originSharingContent = {};

    Themes.getThemes().then(function(res) {
      initSoundAndSong(res.items[0], res.rainy);

      $scope.originSharingContent = res.items[0].origin;
      $scope.originSharingContent.serviceIcon = function() {
        return "fa fa-youtube-square";
      }
    });

    var initSoundAndSong = function(item, rainy) {
      $scope.sound = ngAudio.load(rainy.url);
      $scope.sound.loop = true;
      $scope.sound.unlock = true;
      $scope.song = ngAudio.load(item.url);
      $scope.song.loop = true;
      $scope.song.unlock = true;
    }

    $scope.playSound = function() {
      if ($scope.isRaining) {
        if ($scope.sound.volume > 0.25) {
          $scope.sound.volume -= 0.25;
        }
        else {
          $scope.isRaining = false;
          $scope.sound.volume = 1;
          $scope.sound.stop();
        }
        return;
      }
      $scope.isRaining = true;
      $scope.sound.play();
    }

    $scope.displayVolume = function() {
      if (!$scope.isRaining) {
        return 'fa fa-volume-off fa-3x';
      }
      if ($scope.sound.volume >= 0.75) {
        return 'fa fa-volume-up fa-3x';
      }
      else if ($scope.sound.volume >= 0.25) {
        return 'fa fa-volume-down fa-3x'
      }
      return 'fa fa-volume-off fa-3x';
    }

    $scope.playSong = function() {
      if ($scope.isPlaying) {
        $scope.song.pause();
      }
      else {
        $scope.song.play();
      }
      $scope.isPlaying = !$scope.isPlaying;
    }
  });
