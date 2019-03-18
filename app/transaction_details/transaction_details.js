angular.module('myApp.transaction_details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transaction_details', {
    templateUrl: 'transaction_details/transaction_details.html',
    controller: 'transactionDetailsCtrl'
  });
}])

.controller('transactionDetailsCtrl', function($scope, $http) {
  var displayDateFlag = "false";

  console.log
});