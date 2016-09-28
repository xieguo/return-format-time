var expect = require('chai').expect;
require('../index.js');

describe('ReturnFormatTime', function() {

  describe('#test', function () {
    it('yyyy', function () {
      expect(new Date().format('yyyymmdd')).to.eq(20160928);
    })
  });
});