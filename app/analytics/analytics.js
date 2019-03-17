angular.module('myApp.analytics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/analytics', {
    templateUrl: 'analytics/analytics.html',
    controller: 'analyticsCtrl'
  });
}])

.controller('analyticsCtrl', function($scope, $location, $http) {

    // $http.get(APP_BASE_URL + "/pets")
    // .then(function(response) {
    //     $scope.petsList = response.data;
    // });

});