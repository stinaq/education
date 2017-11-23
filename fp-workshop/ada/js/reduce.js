function reduce(originalArray, callback, initialValue) {
  let result;
  originalArray.forEach(function(item, index) {
    if (index === 0) {
      result = callback(initialValue, item);
    } else {
      result = callback(result, item);
    }
  });

  return result;
}
