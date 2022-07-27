var app = angular.module("todoMod", [])
app.controller("todoController", function($scope, $http){
    $scope.products =["rankit","rankit2"]
    $scope.iteam = "";

    $scope.onAddProduct = function(){        
        if($scope.iteam != "")
        
        $scope.products.push($scope.iteam);
        $scope.iteam = "";
    }
    $scope.deleteProduct = function(index){
        $scope.products.splice(index,1);
    }
})


// let setting =   {
//     "url": "https://angular-js-1b4de-default-rtdb.firebaseio.com/products.json",
//     "method": "put",
//     "data": $scope.iteam
// }
// $http(setting)
// .then(function(response){
//     console.log(response)
// })
