describe('LoginDetails Component', function() {
    beforeEach(angular.mock.module('creator'));
    beforeEach(module('src/login-details/login-details.html'));
    beforeEach(module('src/buttons-footer/buttons-footer.html'));
    var element, scope, UserData;

    const userDetails = {email: 'test@gmail.com', password: '22', confirmedPassword: '22'};

    beforeEach(inject(function($rootScope, $compile, _UserData_){
        UserData = _UserData_;
        spyOn(UserData, 'getUserDetails').and.callFake(function() {
            return userDetails;
        });
        scope = $rootScope.$new();
        element = angular.element('<login-details></login-details>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    it('should render 3 inputs', function() {
        const result = element[0].querySelectorAll('.details-input').length;
        expect(result).toEqual(3);
    });

    it('should render buttons-footer', function() {
        const result = element[0].getElementsByTagName('buttons-footer')[0];
        expect(result).toBeDefined();
    });

    it('should set email address in input field', function() {
        const result = element[0].querySelectorAll('.details-input')[0].value;
        expect(result).toEqual(userDetails.email);
    });

    it('form should be valid', function() {
        const result = element[0].getElementsByTagName('form')[0];
        expect(result.className).toContain('ng-valid');
    });
});

describe('LoginDetails Component - invalid data', function() {
    beforeEach(angular.mock.module('creator'));
    beforeEach(module('src/login-details/login-details.html'));
    beforeEach(module('src/buttons-footer/buttons-footer.html'));
    var element, scope, UserData;
    const userDetails = {email: 'test@gmail.com', password: '2', confirmedPassword: '22'};

    beforeEach(inject(function($rootScope, $compile, _UserData_){
        UserData = _UserData_;
        spyOn(UserData, 'getUserDetails').and.callFake(function() {
            return userDetails;
        });
        scope = $rootScope.$new();
        element = angular.element('<login-details></login-details>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    it('form should be valid', function() {
        const result = element[0].getElementsByTagName('form')[0];
        expect(result.className).toContain('ng-invalid');
    });
});