describe('Groups Service', function() {
    beforeEach(angular.mock.module('creator'));
    var Groups, $q, $httpBackend;
    const groupsList = [
        {
          "id": 1,
          "name": "Group A"
        }
      ];


    beforeEach(inject(function(_Groups_, _$q_, _$httpBackend_) {
        Groups = _Groups_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        spyOn(Groups, 'getList').and.callThrough();
    }));

    it('should exist', function() {
        expect(Groups).toBeDefined();
    });

    it('getList should exist', function() {
        expect(Groups.getList).toBeDefined();
    });

    it('should get list of groups', function() {
        var result = {};
        $httpBackend.expectGET('./mock.json').respond(groupsList);
        expect(Groups.getList).not.toHaveBeenCalled();

        Groups.getList().then(function(res) {
            result = res.data;
        });

        $httpBackend.flush();
        expect(result).toEqual(groupsList);
    });

});