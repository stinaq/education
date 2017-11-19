function reduce(originalArray, callback) {
  originalArray.forEach(function() {
    callback();
  });
}

Ada.reduce = reduce;
