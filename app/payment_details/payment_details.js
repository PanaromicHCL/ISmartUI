angular.module('myApp.payment_details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/payment_details', {
    templateUrl: 'payment_details/payment_details.html',
    controller: 'paymentDetailsCtrl'
  });
}])

.controller('paymentDetailsCtrl', function($scope, dateFilter, $location, $http) {
    // var now = new Date();
    // var minDate = now.toISOString().substring(0,10);
    // $scope.date = {
    //     min: now.toISOString().substring(0,10)
    // };

    var convertedDate = "";
    var inputDate = $scope.date;

    $scope.$watch('date', function (inputDate)
    {
        convertedDate = dateFilter(inputDate, 'dd-MM-yyyy');
    });

    $scope.paymentDescription = function() {
        console.log($scope.Payee);
        console.log($scope.trans_desc);
        console.log($scope.spend_category);
        console.log($scope.amount);
        console.log(convertedDate);
        // console.log($scope.date);
        console.log($scope.payment_type);
    }
});