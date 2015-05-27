'use strict';

describe('The main view E2E tests', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('Poneyracer');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/poneys.gif$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m a beautiful poney');
  });

  it('list at least 1 registered user', function () {
    expect(page.usersEls.count()).toBeGreaterThan(0);
  });

});
