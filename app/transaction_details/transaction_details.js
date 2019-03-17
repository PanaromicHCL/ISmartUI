angular.module('myApp.transaction_details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transaction_details', {
    templateUrl: 'transaction_details/transaction_details.html',
    controller: 'transactionDetailsCtrl'
  });
}])

.controller('transactionDetailsCtrl', function($scope, $location, $http) {

    // $http.get(APP_BASE_URL + "/pets")
    // .then(function(response) {
    //     $scope.petsList = response.data;
    // });

});