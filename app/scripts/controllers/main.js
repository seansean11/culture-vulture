'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('MainCtrl', function ($scope, ngProgress, Event, $location) {
      $scope.search = function() {
        ngProgress.start();
        $location.url('/search');
      };
  });
