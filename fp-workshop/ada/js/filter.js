function filter(originalArray, callback) {
  const result = [];
  originalArray.forEach(function(item) {
    if(callback(item)) {
      result.push(item);
    }
  });

  return result;
}
