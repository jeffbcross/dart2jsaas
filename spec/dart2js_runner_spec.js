var runner = require('../lib/dart2js_runner.js');


describe('dart2js runner', function() {
  it('should run dart2js', function() {
    runner.runner({})(true).then(function(js) {
      expect(js).toEqual("some js");
    });
  })
});