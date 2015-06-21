'use strict';

describe('Service: Themes', function () {

  // load the service's module
  beforeEach(module('misstherainApp'));

  // instantiate service
  var Themes;
  beforeEach(inject(function (_Themes_) {
    Themes = _Themes_;
  }));

  it('should do something', function () {
    expect(!!Themes).toBe(true);
  });

});
