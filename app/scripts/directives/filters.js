'use strict';

/**
 * @ngdoc directive
 * @name cultureVultureApp.directive:filters
 * @description
 * # filters
 */
angular.module('cultureVultureApp')
  .directive('filters', function () {
    return {
      template: '../../views/directives/filter-well.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the filters directive');
      }
    };
  });
