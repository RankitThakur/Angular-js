let httpData = angular.module("httpModule", [])

httpData.controller("httpController", function($scope, $http) {
    $http.get("https://angular-js-1b4de-default-rtdb.firebaseio.com/products.json")
    .then(function (response) {
        $scope.message = response.data
        console.log(response.data)
        console.log(response.status)
        console.log(response)
        console.log("success")
    });
    (error) => {
        
        console.log(error)
    },

    $scope.postData= function(){
        let setting =   {
            "url": "https://angular-js-1b4de-default-rtdb.firebaseio.com/products.json",
            "method": "put",
            "data": $scope.data
        }
        $http(setting)
        .then(function(response){
            console.log(response)
        })

        
    }
})