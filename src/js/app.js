(function app() {
  'use strict';

  var angularApp = angular.module('myApp', []); // eslint-disable-line no-undef
  angularApp .controller(
    'myCtrl',
    function ctrl($scope, $http) {
      $scope.cards = 'loading'; // eslint-disable-line no-param-reassign
      $http.get('http://localhost:3000/api/getWatsonData')
      .then(function gotResponse(response) {
        $scope.cards = response.data.results; // eslint-disable-line no-param-reassign
      })
      .catch(function errorOnGet(error) {
        $scope.cards = error; // eslint-disable-line no-param-reassign
      });
    }
  );
}());
