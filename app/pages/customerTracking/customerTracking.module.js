/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customerTracking', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('customerTracking', {
          url: '/customerTracking',
          templateUrl: 'app/pages/customerTracking/customerTracking.html',
          title: 'Customer Tracking',
          sidebarMeta: {
            icon: 'ion-ios-location',
            order: 2
          }
        })
  }

})();
