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
    var paymentObject = "";

    $scope.$watch('date', function (inputDate)
    {
        convertedDate = dateFilter(inputDate, 'yyyy-MM-dd');
    });

    $scope.paymentDescription = function() {
        // console.log($scope.Payee);
        // console.log($scope.trans_desc);
        // console.log($scope.spend_category);
        // console.log($scope.amount);
        // console.log(convertedDate);
        // // console.log($scope.date);
        // console.log($scope.payment_type);

        paymentObject = {
            "amount": $scope.amount,
            "customerId": $scope.Payee,
            "date": convertedDate,
            "paymentType": $scope.payment_type,
            "spendCategory": $scope.spend_category,
            "transactionDescription": $scope.trans_desc
        }

        console.log("Payment Object" + JSON.stringify(paymentObject));

        // $http.get("http://10.117.189.212:8081/ISmart/api/makeTransaction" + paymentObject)
        // .then(function(response) {
        //     // console.log(JSON.stringify(response.data.textualDescription));
        //    // $scope.polDetails = response.data;
        //    alert("Data has been submitted successfully:" + response);
        // });

        $http.post("http://13.234.59.233:8083/ISmart/api/makeTransaction", paymentObject)
        .then(function (response) {
            console.log("Data has been submitted successfully:" + response);
        });
    }
});