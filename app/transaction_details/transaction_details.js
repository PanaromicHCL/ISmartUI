'use strict';

var transactionsList = [
    {
      amount: "57000",
      customerId: "1",
      date: "2009-03-17",
      paymentType: "Debit",
      spendCategory: "Education",
      transactionDescription: "Tesing New Data"
    },
    {
      amount: "27000",
      customerId: "2",
      date: "2009-03-12",
      paymentType: "Credit",
      spendCategory: "Medical",
      transactionDescription: "Tesing"
    },
    {
      amount: "176000",
      customerId: "4",
      date: "2009-03-19",
      paymentType: "Debit",
      spendCategory: "Loans",
      transactionDescription: "New Data"
    },
    {
      amount: "257000",
      customerId: "4",
      date: "2009-03-28",
      paymentType: "Credit",
      spendCategory: "Shopping",
      transactionDescription: "Data Fill"
    },
    {
      amount: "57000",
      customerId: "1",
      date: "2009-03-17",
      paymentType: "Debit",
      spendCategory: "Education",
      transactionDescription: "Tesing New Data"
    }
];

angular.module('myApp.transaction_details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transaction_details', {
    templateUrl: 'transaction_details/transaction_details.html',
    controller: 'transactionDetailsCtrl'
  });
}])

.controller('transactionDetailsCtrl', function($scope, $http) {
  $scope.displayDateFlag = false;

  // $scope.transList = transactionsList;
  // console.log(JSON.stringify($scope.transList));

  $scope.showDate = function() {
    if ($scope.Category === "Periodically") {
      $scope.displayDateFlag = true;
    }
    else {
      $scope.displayDateFlag = false;
    }
  }  

  $scope.transactionList = function() {
    var reqObject  = "period=" +  $scope.Category + "&spendCategory=" + $scope.spend_category;

    // console.log("Data:" + reqObject);

    $http.get("http://13.234.59.233:8085/ISmart/api/listTransaction?" + reqObject)
    .then(function (response) {
        $scope.transList = response;
        console.log("Data has been submitted successfully:" + response.data);
    });
  }
});