angular.module('basicSeedApp')
  .directive('lazyLoader', function() {
    return {
      transclude: 'element',
      priority: 1200,
      restrict: 'A',
      terminal: true,
      compile: function(element, attr, linker) {
        console.log('sdfsdf');
        return function (scope, iterStartElement, attr) {
          var hasBeenShown = false;
          console.log('df');
          var unwatch = scope.$watch(attr.lazyLoader, function (value) {
            if (value && !hasBeenShown) {
              hasBeenShown = true;
              linker(scope, function (clone) {
                iterStartElement.after(clone);
              });
              unwatch();
            }
          });
        };
      }
    };
  });