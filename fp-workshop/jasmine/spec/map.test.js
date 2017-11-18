describe("Map", function() {
  describe('basic functionality', () => {
    let result;
    const startArray = ['a', 'b'];
    beforeEach(() => {
      result = ada.map(startArray);
    });
    it('should return an array', () => {
      expect(result).toEqual(jasmine.any(Array));
    });
    it('should not return the same array as given', () => {
      expect(result).not.toBe(startArray);
    });
  });
  describe('should return an array', function() {
    // it('something', function() {
    //   var result = ada.map();
    //   expect(result).toEqual(2);
    // })    
  });
});
