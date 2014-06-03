'use strict';
angular.module('basicSeedApp')
  .factory('dbStubService', function ($http) {

  var GET = function () {

    return $http({
      method: 'GET',
      url: 'mockDb/mockDb.json'
    });
  };

  return {
    GET: GET
  };
});
