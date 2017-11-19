const ada = {};

function map(originalArray, callback) {
  let newArray = [];
  originalArray.forEach(function(item, index) {
    originalArray[index] = callback(item);
    // newArray.push(callback(item));
  });
  return originalArray;
}

ada.map = map;
