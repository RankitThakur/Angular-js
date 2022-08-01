var app = angular.module("myTest", []);
app.controller("simple", function($scope){
    $scope.a = 10; 
    $scope.b = 20;
});

app.directive("massage", function(){
    return {
        templateUrl: 'msg.html',
        scope: {
            a:'@',
            b:'@'
        },
    }
});
app.directive("massage2", function(){
    return {
        templateUrl: 'msg.html',
        scope: {
            a:'@',
            b:'@'
        },
    }
});