/* global angular */

angular.module('ExampleApp', ['hj.transformicons'])

  .controller('ExampleCtrl', ['$scope',
    function ExampleCtrl () {
      var vm = this;

      vm.transform = false;
    },
  ]);
