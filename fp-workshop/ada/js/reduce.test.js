fdescribe('Reduce', function() {
  describe('given first argument as an array', function() {
    it('should call callback function as many times as array is long', function() {
      const startArray = [1, 3, 5];
      const mockCallback = jasmine.createSpy('mockFunction');
      const result = Ada.reduce(startArray, mockCallback);
      expect(mockCallback.calls.count()).toEqual(3);
    });
  });
});