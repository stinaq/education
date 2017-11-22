describe("Map", function() {
  describe('basic functionality', () => {
    let result;
    let mockFunction;
    const startArray = ['Diana', 'Hippolyta'];
    beforeEach(() => {
      mockFunction = jasmine.createSpy('mockFunction');
      result = Ada.map(startArray, mockFunction);
    });
    it('should return an array', () => {
      expect(result).toEqual(jasmine.any(Array));
    });
    it('should return an array as long as the one given', () => {
      expect(result.length).toEqual(2);
    });
    it('should call the callback function', () => {
      expect(mockFunction).toHaveBeenCalled();
    });
  });
  describe('given an array of length 3', function() {
    let result;
    let mockFunction;
    const startArray = ['Ada Lovelace', 'Margaret Hamilton', 'Grace Hopper'];
    beforeEach(() => {
      mockFunction = jasmine.createSpy('mockFunction');
      result = Ada.map(startArray, mockFunction);
    });
    it('should call the callback function 3 times', () => {
      expect(mockFunction.calls.count()).toEqual(3);
    });
    it('should call callback with the correct arguments, in the correct order', () => {
      expect(mockFunction.calls.argsFor(0)).toEqual(['Ada Lovelace']);
      expect(mockFunction.calls.argsFor(1)).toEqual(['Margaret Hamilton']);
      expect(mockFunction.calls.argsFor(2)).toEqual(['Grace Hopper']);
    });
    it('should return an array as long as the one given', () => {
      expect(result.length).toEqual(3);
    });
  });
  describe('given a callback that increases the numbers by 2 ', () => {
    let result;
    const increaserCallback = function(item) {
      return item + 2;
    }
    const startArray = [2, 5, 7, 9, 6];
    beforeEach(() => {
      result = Ada.map(startArray, increaserCallback);
    });
    it('should return an array where the callback has been applied to each item in the array', () => {
      const expectedResult = [4, 7, 9, 11, 8];
      expect(result).toEqual(expectedResult);
    });
  });
  describe('functional programming functionality', () => {
    let result;
    const salaryIncreaser = function(salary) {
      return salary * 1.25;
    };
    const startArray = [38000, 45000];
    beforeEach(() => {
      result = Ada.map(startArray, salaryIncreaser);
    });
    it('should not return the same array as given', () => {
      expect(result).not.toBe(startArray);
    });
    it('should not have modified the given array', () => {
      expect(startArray).toEqual([38000, 45000]);
    });
  });
});
