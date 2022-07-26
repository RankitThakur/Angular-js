var show2 = angular.module("data", [])


show2.controller("serCont", function($scope, $location){
    $scope.url = $location.absUrl();
    $scope.protocol = $location.protocol();
    $scope.host = $location.host();
    $scope.port = $location.port()
})
