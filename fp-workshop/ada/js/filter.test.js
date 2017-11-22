describe('Filter', () => {
  describe('basic functionality', () => {
    let result;
    let mockCallback;
    const startArray = ['Hermione', 'Luna'];
    beforeEach(() => {
      mockCallback = jasmine.createSpy('mockCallback');
      result = Ada.filter(startArray, mockCallback);
    });
    it('should return an array', () => {
      expect(result).toEqual(jasmine.any(Array));
    });
    it('should call the callback function', () => {
      expect(mockCallback).toHaveBeenCalled();
    });
    it('should call the callback as many times as the array is long', () => {
      expect(mockCallback.calls.count()).toBe(2);
    });
    it('should call the callback with the correct arguments', () => {
      expect(mockCallback.calls.argsFor(0)).toEqual(['Hermione']);
      expect(mockCallback.calls.argsFor(1)).toEqual(['Luna']);
    });
  });
  describe('given a function that returns all items', () => {
    let result;
    const startArray = ['Buffy', 'Willow'];
    beforeEach(() => {
      const callback = function(item) {
        return item;
      };
      result = Ada.filter(startArray, callback);
    });
    it('should return an array that looks like the original', () => {
      expect(result).toEqual(['Buffy', 'Willow']);
    });
    it('should not return the exact sam array', () => {
      expect(result).not.toBe(startArray);
    });
    it('should not have modified the given array', () => {
      expect(startArray).toEqual(['Buffy', 'Willow']);
    });
  });
  describe('given a callback that returns true for numbers that are over 10', () => {
    let result;
    const startArray = [6, 2, 80, 10, 11, 3, 17];
    beforeEach(() => {
      const callback = function (item) {
        return item > 10;
      };
      result = Ada.filter(startArray, callback);
    });
    it('should return the correct numbers', () => {
      expect(result).toEqual([80, 11, 17]);
    });
  });
  describe('given a callback that returns true for item that has property isPony', () => {
    let result;
    const startArray = [
      {
        name: 'cat',
        isPony: false
      },
      {
        name: 'lion',
      },
      {
        name: 'pony',
        isPony: true
      },
      {
        name: 'horse',
        isPony: true
      },
    ];
    beforeEach(() => {
      const callback = function (item) {
        return item.isPony === true;
      };
      result = Ada.filter(startArray, callback);
    });
    it('should return the correct objects', () => {
      expect(result).toEqual([
        {
          name: 'pony',
          isPony: true
        },
        {
          name: 'horse',
          isPony: true
        }
      ]);
    });
  });
});
