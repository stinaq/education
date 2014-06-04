angular.module('basicSeedApp')
  .directive('helloWorld', function() {
    return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>OMG {{ name }}, you look so good today</h3>',
    };
  });