function map(originalArray, callback) {
  let newArray = [];
  originalArray.forEach(function(item, index) {
    newArray.push(callback(item));
  });
  return newArray;
}

Ada.map = map;
