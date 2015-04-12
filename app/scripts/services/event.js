'use strict';

/**
 * @ngdoc service
 * @name cultureVultureApp.Event
 * @description
 * # Event
 * Factory in the cultureVultureApp.
 */
angular.module('cultureVultureApp')
  .factory('Event', function ($resource) {

    return $resource('api/events', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    });
  });
