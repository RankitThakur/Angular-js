
var app = angular.module(`myDataMod2`, [])

app.controller("myDataController2", function($scope){
    $scope.number = 2;
    $scope.myFun = function() {
        alert("click me ")
        
    };
   $scope.myFun2 = function() {
        $scope.number++;
    };
});