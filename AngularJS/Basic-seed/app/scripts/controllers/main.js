'use strict';

angular.module('basicSeedApp')
  .controller('MainCtrl', function ($scope, dbStubService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = 'Stina';


    dbStubService.GET().then(function (data) {
      $scope.animalGroups = data.data;
    }, function (data) {
      console.log(data);
    });


  });
