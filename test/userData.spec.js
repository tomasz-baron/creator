describe('User Data Factory', function() {
    beforeEach(angular.mock.module('creator'));
    var UserData;
    const details = {email: 'example@gmail.com', password: 'test', confirmedPassword: 'test'};
    const userGroup = {id: '5', name: 'test'};
    const avatar = 'test';

    beforeEach(inject(function(_UserData_) {
        UserData = _UserData_;
    }));

    it('should exist', function() {
        expect(UserData).toBeDefined();
    });

    it('should save user details', function() {
        UserData.setUserDetails(details);
        expect(UserData.getUserDetails()).toEqual(details);
    });

    it('should save user group', function() {
        UserData.setUserGroup(userGroup);
        expect(UserData.getUserGroup()).toEqual(userGroup.id);
    });

    it('should save avatar', function() {
        UserData.setUserAvatar(avatar);
        expect(UserData.getUserAvatar()).toEqual(avatar);
    });

    it('should return all user data', function() {
        UserData.setUserDetails(details);
        UserData.setUserGroup(userGroup);
        UserData.setUserAvatar(avatar);
        expect(UserData.getUserData()).toEqual({details: details, userGroup: userGroup, avatar: avatar});
    });

});