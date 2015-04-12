'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('MainCtrl', function ($scope, Event, $state) {

      $scope.search = function() {
        $state.go('search', {q: $scope.query});
      };
  });
