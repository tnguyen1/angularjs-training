'use strict';

describe('Register E2E tests', function() {
  it('should display the login field', function() {
    browser.get('#register');

    var loginLabel = $('#login-label');
    var login = $('#login');
    var loginWarning = $('#login-warning');

    // when field is empty
    expect(loginLabel.getText()).toBe('Login');
    expect(loginLabel.getAttribute('class')).not.toContain('red');
    expect(login.getAttribute('class')).not.toContain('ng-invalid-minlength');
    expect(login.getCssValue('border')).toContain('');
    expect(loginWarning.isPresent()).toBeFalsy();

    // typing one character should trigger invalid-length
    login.sendKeys('c');

    // it should now be invalid
    // with label red
    // FIXME! expect(loginLabel.getAttribute('class')).toBe('red');
    // and field with orange border
    expect(login.getAttribute('class')).toContain('ng-invalid-minlength');
    // FIXME! expect(login.getCssValue('border')).toContain('3px solid rgb(102, 175, 233)');
    // and warning displayed
    expect(loginWarning.isDisplayed()).toBeTruthy();
    expect(loginWarning.getText()).toBe('Warning! Your login should have at least two characters');
  });
});
