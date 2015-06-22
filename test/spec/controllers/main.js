'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('misstherainApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have originSharingContent in the scope', function () {
    expect(scope.originSharingContent).toBeDefined();
    expect(scope.originSharingContent).toEqual({});
  });

  it('should have playSound function', function() {
    expect(scope.playSound).toBeDefined();
    expect(scope.playSound).toBeTruthy();
  });

  it('should have playSong function', function() {
    expect(scope.playSong).toBeDefined();
    expect(scope.playSong).toBeTruthy();
  });

  it('should have isRaining and isPlaying in the scope',function() {
    expect(scope.isPlaying).toBeDefined();
    expect(scope.isPlaying).toEqual(false);
    expect(scope.isRaining).toBeDefined();
    expect(scope.isRaining).toEqual(false);
  });


});
