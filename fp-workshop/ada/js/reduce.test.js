describe('Reduce', function() {
  describe('basic functionality', function() {
    it('should call callback function as many times as array is long', function() {
      const startArray = [1, 3, 5];
      const mockCallback = jasmine.createSpy('mockFunction');
      const result = reduce(startArray, mockCallback, 0);
      expect(mockCallback.calls.count()).toEqual(3);
    });
  });
  describe('when initial value is given', () => {
    describe('given an array of only one element', () => {
      it('should return the initial value', () => {
        const startArray = [1];
        const emptyCallback = function (item) { return item };
        const result = reduce(startArray, emptyCallback, 0);
        expect(result).toEqual(0);
      });
    });
    describe('given an array of multiple elements', () => {
      describe('given a callback that sums up all elements in the array', () => {
        it('should return the sum of those elements (6)', () => {
          const startArray = [1, 2, 3];
          const sumCallback = function(accumulator, item) {
            return accumulator + item;
          };
          const result = reduce(startArray, sumCallback, 0);
          expect(result).toEqual(6);
        });
      });
      // describe('given a callback that splits the gi and an object as initial value', () => {
      //   it('should return the correct object', () => {
      //     const startArray = [
      //       ['Gal Gadot', 'Wonder Woman'],
      //       ['Sara Michelle Gellar', 'Buffy the Vampire Slayer'],
      //     ];
      //     const sumCallback = function (accumulator, item) {
      //       return accumulator;
      //     };
      //   });
      // });
    });
  });
});
