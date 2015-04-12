'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('MainCtrl', function ($scope, Event, $location) {

      $scope.search = function() {
        $location.url('/search?q=' + $scope.query);
      };
  });
