var path = require('path');
describe('LoginDetailsComponent', function() {

    it('should have a title', function() {
        browser.get('index.html');
        expect(browser.getTitle()).toEqual('Creator');
    });

    it('should add one and two', function() {
        browser.get('index.html');
        const filePath = path.resolve(__dirname, '../img/icon.png');
        const email = 'test@gmail.com';
        const groupName = 'Group A';

        //loginDetails
        expect(element(by.className('button-next')).isEnabled()).toBe(false);

        element(by.model('$ctrl.data.email')).sendKeys(email);
        element(by.model('$ctrl.data.password')).sendKeys('test');
        element(by.model('$ctrl.data.confirmedPassword')).sendKeys('test');

        expect(element(by.className('button-next')).isEnabled()).toBe(true);

        element(by.className('button-next')).click();

        //userGroup
        element(by.css('.groups-select')).element(by.cssContainingText('option', groupName)).click();

        expect(element(by.className('button-next')).isEnabled()).toBe(true);

        element(by.className('button-next')).click();

        //avatarDetails
        expect(element(by.className('button-next')).isEnabled()).toBe(false);

        element(by.className('open-button')).click();

        //avatar-modal
        expect(element(by.className('button-upload')).isEnabled()).toBe(false);

        element(by.className('input-avatar')).sendKeys(filePath);

        expect(element(by.className('button-upload')).isEnabled()).toBe(true);

        element(by.className('button-upload')).click();
        expect(element(by.className('button-next')).isEnabled()).toBe(true);
        element(by.className('button-next')).click();

        //userSummary
        expect(element(by.model('$ctrl.userData.details.email')).getAttribute('value')).toEqual(email);
        expect(element(by.model('$ctrl.userData.userGroup.name')).getAttribute('value')).toEqual(groupName);
        
      });

});