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
        if($scope.query == undefined) {
          $scope.query = '*';
        }

        $state.go('search', {q: $scope.query, size: 100});
      };

      $scope.fakeClick = function(cat) {
        $state.go('search', {q: $scope.query, size: 100, cat: cat});
      }
  });
