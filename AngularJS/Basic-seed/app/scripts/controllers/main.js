'use strict';

angular.module('basicSeedApp')
  .controller('MainCtrl', function ($scope, dbStubService) {

    $scope.message = 'Welcome to AngularJS';
    $scope.animalGroups;
    $scope.load = false;

    dbStubService.GET().then(function (data) {
      $scope.animalGroups = data.data;
    }, function (data) {
      console.log(data);
    });

  });
