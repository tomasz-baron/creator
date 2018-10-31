describe('User Data Factory', function() {
    beforeEach(angular.mock.module('creator'));
    var UserData;

    beforeEach(inject(function(_UserData_) {
        UserData = _UserData_;
    }));

    it('should exist', function() {
        expect(UserData).toBeDefined();
    });

});