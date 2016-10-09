var expect = require('chai').expect;
require('../return-format-time.js')();

describe('Date format test', function () {
  it('The current fomat date should be 20161009', function () {
    expect(new Date().format('yyyymmdd')).to.be.equal('20161009');
  })
});
