'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('EventCtrl', function ($scope, singleEvent) {
    $scope.event = singleEvent;
  });

